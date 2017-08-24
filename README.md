# New Personal Website 2017

To deploy to a new machine:

```
git clone https://github.com/MarkAZhang/personal-website.git
cd personal-website
vim .env.prod # Add a prod .env file. Otherwise the server will crash.
chmod a+x ./deploy.sh
./deploy.sh

```

The CircleCI script doesn't work the first time, because it doesn't create the `.env.prod` file. A proper way to do it is to have a special Git repo for secrets, and in the script, clone from that and copy the file into the `personal-website` repo.
