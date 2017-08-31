# ionic-account-input
ionic2以上输入卡号后四位输入框

下载安装
-------------------
        git clone https://github.com/yhm417734593/ionic-account-input.git

使用方法
-------------------

### import module

app.module.ts

        import { IonAccountInputComponent } from './ion-account-input/ion-account-input';  //路径自行更改
        .....
        @NgModule({
        declarations: [
            IonAccountInputComponent,
        ]

### 在父组件中引用

        <ion-account-input [(extraCardNo)]="cardLastFourNum" [cardNo]="cardNo"><ion-account-input/>  
        //cardNo为需要绑定的卡号，extraCardNo为需要绑定的卡号后四位
        
