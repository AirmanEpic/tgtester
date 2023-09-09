# tgtester
 testing env for typegenius

## setup instructions
 ensure you have nextjs installed
 run ``npm run dev`` in the /tgtester folder
 go to localhost:3000

## linking your module for local development
 go to your development module folder
 use the command ``npm link``
 go to your environment folder
 use the command ``npm link @typegeniusClient/frontend`` and ``npm link @typegeniusClient/backend`` (Ideally, we need to get that working first)