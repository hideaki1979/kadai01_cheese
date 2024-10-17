// ハンバーガーメニューの制御用
// メニュー押下時にスライドメニューを表示させメニューを×ボタンに変形させる。
document.querySelector('.hamburger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.slide_menu').classList.toggle('active');
})

// スライドメニュー押下時にスライドメニューを隠して×をハンバーガーメニューの状態に戻す
// toggleはactiveクラスの存在有無を確認し、無ければクラスを追加、あれば削除を行う。
document.querySelector('.slide_menu').addEventListener('click', function(){
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.slide_menu').classList.toggle('active');
})

// COURSEの画像表示アニメーション
// スクロール内に表示されたときにスライドインする。
// addとremoveを使ってスクロール外から再度スクロール内になったときに
// スライドインする。
const images = document.querySelectorAll('.course_box_img');
const animationClassName = 'course_box_img-animation';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(animationClassName);
    } else {
      entry.target.classList.remove(animationClassName);
    }
  });
});

// Intersection Observer:特定の要素がスクロール領域内に入ったかどうかを検知するAPI
images.forEach((image) => {
  observer.observe(image);
});