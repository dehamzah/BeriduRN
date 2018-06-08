# Beridu

![Preview](preview.gif)

Stands for 'Berita Dunia', single app for browsing latest news from various news site, its powered by [newsapi.org](newsapi.org) for the data.


## How to Use

```
$ yarn install
```

Setup secret key, in order to use API from newsapi, we need to setup the secret key f
irst.

```
$ mkdir app/config
$ touch app/config/secret.json
```

Fill it with this format

```
{
  "key": "3a52a494de714fb4b3f88d0ad3xxxxxx"
}
```

Now you can run it using this command

```
$ react-native run-android
```

