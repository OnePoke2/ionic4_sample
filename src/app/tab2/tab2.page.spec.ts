import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  restaurant_subtitle = "美味しいよ"

  french = "俺のフレンチ";
  french_description = "ロッシーニが美味しいよ"

  itarian = "俺のイタリアン";
  itarian_description = "ピザが美味しいよ"
}
