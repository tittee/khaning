# Frontity + Sage Theme - WordPress Headless CMS

WordPress Sage Theme and Frontity [Headless CMS]

## Installation
1. Docker and WordPress 
- Open Iterm/Terminal and cd to /wordpress/
```python
cd wordpress/
docker-compose up -d


```Note I setup nginx for mine proxy [khaning.test], Please rewrite when your want to run 
- wordpress/nginx/khaning.conf
- sudo nano /etc/hosts/
- 127.0.0.1 khaning.test
```
- Run sage theme 
```python
cd wordpress/wp-content/theme/khaning
yarn add 'or' npm install
``` Default port :3000 [for me i must run the Frontity at port 3000 first
yarn run dev 'or' npm run dev
```

- Run Frontity
```python
cd frontend/
yarn add 'or' npm install [follow package.json]
yarn run dev 'or' npm run dev
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)