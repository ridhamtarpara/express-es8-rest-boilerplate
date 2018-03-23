#!/bin/bash
docker build -t ridhamtarpara/express-rest-es2017-boilerplate .
docker push ridhamtarpara/express-rest-es2017-boilerplate

ssh deploy@$DEPLOY_SERVER << EOF
docker pull ridhamtarpara/express-rest-es2017-boilerplate
docker stop api-boilerplate || true
docker rm api-boilerplate || true
docker rmi ridhamtarpara/express-rest-es2017-boilerplate:current || true
docker tag ridhamtarpara/express-rest-es2017-boilerplate:latest ridham/express-rest-es2017-boilerplate:current
docker run -d --restart always --name api-boilerplate -p 3000:3000 ridham/express-rest-es2017-boilerplate:current
EOF
