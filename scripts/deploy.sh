#!/bin/bash

set -euo pipefail

# Trigger a build and extract deployment ID
response=$(curl --silent --request POST "https://api.render.com/deploy/srv-cpg7j3ect0pc73d8so10?key=$RENDER_DEPLOY_HOOK_KEY&ref=$COMMIT_REF" --header 'accept: application/json')
deployment_id=$(echo $response | jq -r '.deploy.id')

# Check if the deployment ID was extracted successfully
if [ -z "$deployment_id" ]; then
  echo "Failed to trigger the deployment or extract deployment ID."
  echo "Response: $response"
  exit 1
fi

echo "Deployment triggered. Deployment ID: $deployment_id"

# Function to check the status of the deployment
check_deployment_status() {
  status_response=$(curl --silent --request GET \
    --url "https://api.render.com/v1/services/srv-cpg7j3ect0pc73d8so10/deploys/$deployment_id" \
    --header 'accept: application/json' \
    --header "authorization: Bearer $RENDER_API_KEY")

  deployment_status=$(echo $status_response | jq -r '.status')
  echo $deployment_status
}

# Loop until the deployment status is "live"
echo "Checking deployment status..."
while true; do
  status=$(check_deployment_status)
  if [ "$status" == "live" ]; then
    echo "Deployment is live."
    break
  else
    echo "Current status: $status. Waiting for deployment to go live..."
    sleep 30  # Wait for 30 seconds before checking again
  fi
done