# pinboard-books

heavily inspired by infovore's [pinboard-bookmachine](pb-machine), which I had
used in the past to create these books. I didn't want to deal with configuring
ruby every year so I rewrote it in js.

# how to create your books

[get your pinboard token][token] & set it in your environment:

```sh
$ export PINBOARD_TOKEN=<YOUR_PINBOARD_TOKEN>
```

next fetch your data:

```sh
$ npm run fetchdata
```

*...next steps TK*

[token]: https://pinboard.in/settings/password
[pb-machine]: https://github.com/infovore/pinboard-bookmachine
