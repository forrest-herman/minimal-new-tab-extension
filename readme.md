# Development

This project uses [Vite](https://vitejs.dev/guide/)

## Gettings Started

- cd into the project dir and run `npm install`
- run `npm run dev`


## Packaging the Extension

### Requirements
- install yarn: `npm install -g yarn`
- install jq
  - (MacOS) `brew install jq`
  - (Win) run this curl in your gitbash `curl -L -o /usr/bin/jq.exe https://github.com/stedolan/jq/releases/latest/download/jq-win64.exe`
- Add zip to Git Bash: [Article](https://ranxing.wordpress.com/2016/12/13/add-zip-into-git-bash-on-windows/#:~:text=While%20using%20git%2Dbash%2C%20you,you%20can%20get%20from%20gnuwin32.)
  
### Build Process

run `./make_extension.sh` in the root dir