<template>
  <v-main>
    <v-container>
      <v-col class="text-center">
        <p class="display-3 font-weight-black">Everything is output</p>
        <p class="display-5 font-weight-black">Write Blog Every Week</p>
        <v-btn to="/posts">
          <span>CHECK<br />members posts</span>
        </v-btn>
      </v-col>
    </v-container>

    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col>
          <div class="display-3 font-weight-black text-md-left">
            <p>毎週<br />ブログを書く<br />ただ<br />それだけ</p>
          </div>
        </v-col>
        <v-col>
          <p justify="center">
            <span class="display-5 font-weight-black"
              >Write Blog Every Week</span
            >
            は週に1記事ブログを書くコミュニティです。<br />
            記事の内容はどんなことでも構いません。<br />
            日記、学習のメモ、テクノロジーについて...
            まずはアウトプットを習慣づけましょう。
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <p class="display-3 font-weight-black">RULE</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-md-4 col-12">
          <v-card>
            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              >1</v-card-title
            >
            <v-card-text class="text-center">週に1記事書き上げる</v-card-text>
          </v-card>
        </v-col>
        <v-col class="col-md-4 col-12">
          <v-card>
            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              >2</v-card-title
            >
            <v-card-text class="text-center"
              >書けなかったら翌週に持ち越し</v-card-text
            >
          </v-card>
        </v-col>
        <v-col class="col-md-4 col-12">
          <v-card>
            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              >3</v-card-title
            >
            <v-card-text class="text-center"
              >3週分書かなかったら退会</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <p class="display-3 font-weight-black">CONTACT</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-md-6 col-12">
          <v-card>
            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              >slack</v-card-title
            >
            <v-card-text class="text-center"
              ><a
                href="https://join.slack.com/t/write-blog-every-week/shared_invite/zt-ffmqdejm-MXoqx3cHqJqN6m6BszsbVw"
                >slack</a
              ></v-card-text
            >
          </v-card>
        </v-col>
        <v-col class="col-md-6 col-12">
          <v-card>
            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              >twitter</v-card-title
            >
            <v-card-text class="text-center"
              ><a href="https://twitter.com/yoshitaku_jp" target="”_blank”"
                >yoshitaku_jp</a
              ></v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-row style="height: 480px" align="center" justify="center">
        <p class="display-3 font-weight-black mb-4">Happy Blogging</p>
      </v-row>
    </v-container>
  </v-main>
</template>
