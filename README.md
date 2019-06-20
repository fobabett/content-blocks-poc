# Install

install gatsby cli globally
```
npm install -g gatsby-cli
```

install project dependencies
```
yarn install
```

# Start Dev Server
```
gatsby develop
```

open browser to localhost:8000

# Updating Content

Content can be edited in `src/pages/index.md`

The file uses key pair values.
Values must be strings.

To add items to lists such as `Section_2_Logos`, just add valid json and be sure to escape `"`:
```
{\"image\": \"http://placehold.it\", \"title\": \"subway\"}
```