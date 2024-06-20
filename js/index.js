// JavaScript Document
var jx_speed = 5000; //轮播图片时间设置
var jxlunbo = document.getElementById("lunbo");
var num = 1;
var time1 = setInterval(getlunbo, jx_speed);

function getlunbo() {
    num++;
    if (num == 3) {
        num = 1;
    }
    jxlunbo.src = "images/banner" + num + ".jpg";
}
var l_lunbo = document.getElementById("left");
var r_lunbo = document.getElementById("right");
l_lunbo.onclick = function () {
    debugger;
    num++;
    if (num == 3) {
        num = 2;
    }
    jxlunbo.src = "images/banner" + num + ".jpg";
};
r_lunbo.onclick = function () {
    num--;
    if (num == 3) {
        num = 0;
    }
    jxlunbo.src = "images/banner" + num + ".jpg";
};

document.addEventListener('DOMContentLoaded', function() {
    var subnavTriggers = document.querySelectorAll('.top4');
  
    subnavTriggers.forEach(function(trigger) {
      trigger.addEventListener('mouseenter', function() {
        this.querySelector('.top5').style.display = 'block';
      });
  
      trigger.addEventListener('mouseleave', function() {
        // 确保鼠标离开时隐藏二级导航
        this.querySelector('.top5').style.display = 'none';
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // 假设有一个函数可以获取当前页面的层级结构
    var breadcrumbs = getCurrentPageBreadcrumbs();
    
    // 获取面包屑容器
    var breadcrumbsContainer = document.querySelector('.breadcrumbs ul');
    
    // 清空现有内容
    breadcrumbsContainer.innerHTML = '';
    
    // 遍历面包屑数组并添加到DOM
    breadcrumbs.forEach(function(breadcrumb, index) {
      var li = document.createElement('li');
      if (index < breadcrumbs.length - 1) {
        // 不是最后一个面包屑，添加链接
        var a = document.createElement('a');
        a.href = breadcrumb.url;
        a.textContent = breadcrumb.title;
        li.appendChild(a);
      } else {
        // 最后一个面包屑，不添加链接
        li.textContent = breadcrumb.title;
      }
      breadcrumbsContainer.appendChild(li);
    });
  });
  
  // 这个函数需要根据你的网站结构进行实现
  function getCurrentPageBreadcrumbs() {
    // 返回面包屑数据的示例
    return [
      { title: '首页', url: '/' },
      { title: '分类', url: '/category' },
      { title: '子分类', url: '/category/sub-category' },
      { title: '当前页面' } // 当前页面没有URL
    ];
  }