# AWS Deployment Guide

This guide covers three different methods to deploy the CloudLearn platform on AWS, ranging from basic static hosting to a fully containerized scalable approach.

## 1. S3 Static Hosting (Recommended & Most Cost-Effective)

Since this is a React Single Page Application (SPA), the simplest and cheapest way to host it is using AWS S3 combined with CloudFront for CDN.

### Steps:
1. **Build the Application**:
   ```bash
   npm run build
   ```
   This will generate a `dist` directory with your static assets.

2. **Create an S3 Bucket**:
   - Go to AWS S3 Console.
   - Create a bucket (e.g., `cloudlearn-frontend`).
   - Uncheck "Block all public access".
   - Enable "Static website hosting" in the properties tab.
   - Set the index document and error document to `index.html` (critical for React Router fallback).

3. **Upload Files**:
   - Upload the contents of your `dist` folder into the S3 bucket.

4. **Bucket Policy**:
   - Add a bucket policy to allow `s3:GetObject` so the public can read your website files.

5. **CloudFront (Optional but recommended)**:
   - Create a CloudFront Distribution pointing to your S3 bucket endpoint.
   - This provides SSL (HTTPS) and edge caching globally.

---

## 2. Docker on AWS EC2 (Containerized Hosting)

Use this method if you want full control over your server environment.

### Steps:
1. **Launch an EC2 Instance**:
   - Provision an Amazon Linux 2 or Ubuntu instance.
   - Configure Security Groups to allow inbound HTTP (80) and SSH (22).

2. **Install Docker**:
   - SSH into your instance.
   - Install Docker (`sudo yum install docker` or `sudo apt install docker.io`).
   - Start the Docker service (`sudo systemctl start docker`).

3. **Deploy the App**:
   - Clone your repository to the EC2 instance.
   - Build the Docker image:
     ```bash
     sudo docker build -t cloudlearn-app .
     ```
   - Run the container:
     ```bash
     sudo docker run -d -p 80:80 cloudlearn-app
     ```
   Your app will now be accessible via the EC2 instance's public IP address.

---

## 3. AWS Elastic Beanstalk (PaaS Approach)

Elastic Beanstalk abstracts away the infrastructure management, perfect for rapid deployment.

### Steps:
1. **Prepare the Package**:
   - Ensure you have a `Dockerrun.aws.json` (if using Docker environment) or just zip your project files. Since we have a Dockerfile, we will use the Docker platform.
   - Zip your project files (excluding `node_modules`):
     ```bash
     zip -r cloudlearn.zip . -x "node_modules/*"
     ```

2. **Create Beanstalk Environment**:
   - Go to the Elastic Beanstalk console.
   - Create a new web server environment.
   - Choose the "Docker" platform.
   - Upload your `cloudlearn.zip` file as the application code.
   - Click "Create environment".

Beanstalk will automatically provision the EC2 instances, load balancers, and Auto Scaling groups required to run the Docker container seamlessly.
