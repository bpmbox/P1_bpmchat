---
title: [python] Firebase Realtime Databaseのはじめ方
tags: Python Python3 Firebase 初心者 Heroku
author: sai-san
slide: false
---
#Firebase Realtime Database とは
Googleの説明を引用します。無料枠があり、簡単に利用できるDBの一つです。
>Firebase Realtime Database は、リアルタイムにデータを保存およびユーザー間で同期できる、クラウドホスト型 NoSQL データベースです。 新機能: Cloud Firestore（ベータ版）を使用すると、グローバルなスケールでアプリデータを保存、同期、照会することができます。
https://firebase.google.com/docs/database/?hl=ja

#install
以下のコマンドで、firebase-adminをインストールします。

```
＄ pip3 install firebase-admin
```

#ルールを以下の用に変更する

![image.png](https://qiita-image-store.s3.amazonaws.com/0/133230/22472e38-9228-a59c-c067-963dc21efe17.png)


```
{
  "rules": {
      ".read": true,
      ".write": true
  }
}
```

#Firebaseにアクセスする
以下のコードでアクセスし、データを追加・参照することができます。

```firebase.py
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate('./<your service account json>')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://<your database url>',
    'databaseAuthVariableOverride': {
        'uid': 'my-service-worker'
    }
})

##databaseに初期データを追加する
users_ref = db.reference('/users')

users_ref.set({
    'user001': {
        'date_of_birth': 'June 23, 1984',
        'full_name': 'Sazae Isono'
        },
    'user002': {
        'date_of_birth': 'December 9, 1995',
        'full_name': 'Tama Isono'
        }
    })

# databaseにデータを追加する
users_ref.child('user003').set({
    'date_of_birth': 'Aug 23, 1980',
    'full_name': 'Masuo Isono'
    })

##データを取得する
print(users_ref.get())
```
これを実行すると以下のようにデータが保管されます。

![image.png](https://qiita-image-store.s3.amazonaws.com/0/133230/4d9ed629-caae-6103-7687-bb07083addbb.png)



#一部データのみ更新する
データを保存後に一部のデータのみ更新したい場合があると思います。
例えば以下のようなケースです。

![image.png](https://qiita-image-store.s3.amazonaws.com/0/133230/0b49e74b-d16d-8794-d8e0-166e741db3ac.png)

そのような場合はUPDATE関数を使って上記の図のような結果になるように更新することができます。

```firebase.py

##データを更新する
updates = {}
updates['/user001/full_name'] = 'Sazae Fuguta'
users_ref.update(updates)
```


#HerokuにデプロイしたPython3からFirebaseにアクセスするには

```pip freeze```を行い、必要なモジュールをrequirements.txt化して、Heroku側に教えて上げてくださいね。

```terminal

# インストール済みのpackage情報をrequirements.txtに保存
$ pip freeze > requrements.txt
```



#参考URL　

- [python3でfirebaseのRealtime Databaseを使う](https://mitubaex.hatenablog.com/entry/2018/02/11/151543)
- [初心者がHerokuにDjangoアプリをデプロイする方法](https://qiita.com/terappy/items/803ff638d63b3dc09ada)
