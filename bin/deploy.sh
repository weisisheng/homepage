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
aws s3api put-object --bucket $BUCKET --acl public-read --key "dating-resume" --website-redirect-location "/dating-resume.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "pricing" --website-redirect-location "/pricing.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "about" --website-redirect-location "/about.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "examples" --website-redirect-location "/examples.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "terms" --website-redirect-location "/terms.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "privacy" --website-redirect-location "/privacy.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "professional-resumes" --website-redirect-location "/professional-resumes.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "personal-branding" --website-redirect-location "/personal-branding.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "student-resumes" --website-redirect-location "/student-resumes.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "freelancer-resumes" --website-redirect-location "/freelancer-resumes.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "unusual-resumes" --website-redirect-location "/unusual-resumes.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "aiesec" --website-redirect-location "/aiesec.html"
aws s3api put-object --bucket $BUCKET --acl public-read --key "tandem-cv" --website-redirect-location "/tandem-cv.html"
