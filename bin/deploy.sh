echo "[PRODUCTION DEPLOY] Uploading HTMLS to S3..."
aws s3 sync ./cdn s3://$BUCKET --acl public-read --exclude "*.html" --cache-control "public, max-age=15592000"

echo "[PRODUCTION DEPLOY] Uploading media to S3..."
aws s3 sync ./cdn s3://$BUCKET --acl public-read --exclude "*" --include "*.html" --cache-control "public, max-age=300"

echo "[SETUP REDIRECTS] Uploading items to S3..."
aws s3api put-object --bucket $BUCKET --acl public-read --key "jobs.html" --website-redirect-location "/"
aws s3api put-object --bucket $BUCKET --acl public-read --key "partners.html" --website-redirect-location "/"
aws s3api put-object --bucket $BUCKET --acl public-read --key "bizdev.html" --website-redirect-location "/"
aws s3api put-object --bucket $BUCKET --acl public-read --key "bizdev.html" --website-redirect-location "/"
aws s3api put-object --bucket $BUCKET --acl public-read --key "contacts.html" --website-redirect-location "/"
aws s3api put-object --bucket $BUCKET --acl public-read --key "promocode.html" --website-redirect-location "/"
