// - mAKE THE \$10 ALERT

# IAM - Identity Access and Amanagments

https://727041324065.signin.aws.amazon.com/console

1 master account
make another master account as good practice (Administrataor)
Subaccount for roles
for users or robots ci/cd

- Setup some billing notifications to protect yourself

to LOGIN YOU NEED THE IAM SIGN LINK

- add two factor authentication
- add invididual users
- add policies

* attach existing policies - Administrator acesss - billing wont have access

# S3 - simple storage service

- files - host webpages
- infanetely scalable
- availability (99.9%) and durability (99.9n11%)
- there are some storage tiers

S3 is basically a key and value folder

- putting objects in s3 is immediate (I doubt lol)

S3 will charge for storage and request (mitigate with cache)

# Register a domain with Route 53 (Scalable DNS and DOmain Name Registration)

For free tier the buckets must be the same name as the domain domain - bucket mustt be unique

```aws
{
    "Version": "2012-10-17",
    "Statement" : [
        {
            "Effect": 'Allow'
            "Principal": '*'
            "Action": 's3:GetObject"
            "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME_HERE/*"
        }
    ]
}
```

# S3

-create bucket
-set policy

- static website hosting
- upload with command line

NOTE: When hosting directly from and s3 bucket you s3 bucket name should be the same as your domain

With cloudfront is not like this - What da fuq is Clooudfront

tURN ON STATIC WEB HOSTING

GENERATE POLICY WITH THE EXMAPLE ABOVE

- hosted on an aws url

AWS-CLI
https://aws.amazon.com/cli/

RUN `aws configure` - you can have multiple accounts
aws configure --profile somehting_else

get content of you bucket
aws s3 ls s3://jarvisdashboard.com

copy build folder to s3 recursivelly
aws s3 cp build/ s3://jarvisdashboard.com/ --recursive

- setup real domain

click domain - manage DNS - MANAGE RECORD SET - CREATE RECORD SE

leave name empty - set Alias as the s3 bucket

DNS take some time to propagate

DNS is just the servers that take care of translating what.com to a normal ip address

- Create SSL certificate (add https)

Certificate Manager - add both www and non www

Create record in Route 53 - if you bought it with Amazon this is very easy

### Fix client side routing (not broken)

Set error as index.html in S3 that will fix client side routing kinda

Tis returns a 404 on that route initially

### Seeting up a www

#### CLOUDFRONT

Globally distributed - no Virginia only
Cloudfront take some time - they take time to distribute around the globe
Do I need cloudfront for https?

Create distribution:
use the name of the S3 Bucket not the default
Redirect http to https
Compress objects with gzip
set alternate domain names
whatever.com
www.wahtever.com
Custom SSL - go to AWS Certificate Manager
Default root object /index.html

### Cloudfront error state

Tog et rid of 404 on client side let's do

Custom Error on cloud front
4004 Not Fond -> /index.html with 200:OK

This is kidna bad since every route is cool - the 404 of react router has to handle this

Let's do it for 403 too

## Cache invalidations

If you cache the edge and then push a new change

Deploying app changes the s3 so if is chache in a node then is an issue

Solutions

- Lower cahcing time to 5 minutes - this will make it slow for that first person
- create invalidations - manually in the invalidations tabs - Object Paths just type \* (invalidate everything)

## TRAVIS CI

Create a new AIM user that has a custom policy which allows you too

- invalidate cloudfront cache
- write to S3
