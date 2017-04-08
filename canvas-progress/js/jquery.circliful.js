(function( $ ) {
    $.fn.circliful = function(options) {
        var settings = $.extend({
            // These are the defaults.
            foregroundColor: "#fa6087",
            backgroundColor: "#eee",
            fillColor: false,
            width: 6,
            dimension: 200,
            size: 15, 
            percent: 50,
            endPercent: 100,
            sarcr: 10,
            showValue: "showValue", //新增 动态数值变化值显示标签ID
            animationStep: 1.0
        }, options );
         return this.each(function() {
                var dimension = settings.dimension;
                var text = '';
                var info = '';
                var width = settings.width;
                var size = settings.size;
                var sarcr = settings.sarcr;
                var percent = settings.percent / 100;
                var endPercent = settings.endPercent;
                var fgcolor = settings.foregroundColor;
                var bgcolor = settings.backgroundColor;
                var icon = '';
                var animationstep = settings.animationStep;
                var showValue = settings.showValue; //赋值
                $(this).addClass('circliful');

                $(this).width(dimension + 'px');
                 
              var canvas = $('<canvas></canvas>').html('您的浏览器不支持canvas').attr({ width: dimension, height: dimension }).appendTo($(this)).get(0);

                if(typeof window.G_vmlCanvasManager != 'undefined'){
                    canvas = window.G_vmlCanvasManager.initElement(canvas);　　//IE8兼容getContext
                    var context = canvas.getContext('2d');
                }else{
                    var context = canvas.getContext('2d');
                }

              var x = canvas.width / 2;
              var y = canvas.height / 2;
              var degrees = percent * 360.0;
              var radians = degrees * (Math.PI / 180);
              var radius = canvas.width / 2.5;
              var startAngle = 2.3 * Math.PI;
              var endAngle = 0;
              var counterClockwise = false;
              var curPerc = animationstep === 0.0 ? endPercent : 0.0;
              var curStep = Math.max(animationstep, 0.0);
              var circ = Math.PI * 2;
              var quart = Math.PI / 2;
              var type = '';
              var fill = false;
               
              if($(this).data('type') != undefined) {
                    type = $(this).data('type');
                     
                    if(type == 'half') {
                        var startAngle = 2.0 * Math.PI;
                        var endAngle = 3.13;
                        var circ = Math.PI * 1.0;
                        var quart = Math.PI / 0.996;
                    }
                }
                 
                if($(this).data('fill') != undefined) {
                    fill = $(this).data('fill');
                } else {
                    fill = settings.fillColor;
                }
              //animate foreground circle
              function animate(current) {
                /**
                 * [修改] 设置圆心动态数据变化值
                 * showValue 为显示动态值的html标签的ID
                 * 这里 parseInt(current*100) 取整数，他的最大值为 endPercent的值
                 **/
                $("#"+showValue).html(parseInt(current*100));
                /**
                 * [修改] 判断值是否超过圆形的一半，并修改圆形颜色              *
                 **/
                if(current < 0.5){
                    fgcolor = '#fa6087';
                }else{
                    fgcolor = '#f75656';
                }
                 
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.save();                 
                context.beginPath();
                context.arc(x, y, radius, endAngle, startAngle, false);
                context.lineWidth = width - 1;      
                // line color
                context.strokeStyle = bgcolor;
                context.stroke();
                context.restore();
                if(fill) {
                    context.fillStyle = fill;
                    context.fill();
                }
                context.save();                 
                context.beginPath();
                context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
                context.lineWidth = width;
                // line color
                context.strokeStyle = fgcolor;
                context.stroke();
                context.restore();
                
                var hudu = ((circ) * current);
                context.save();
                context.beginPath();
                context.arc(x + Math.sin(hudu) * radius, y - Math.cos(hudu) * radius, sarcr, 0*Math.PI, 2*Math.PI);
                context.fillStyle = '#fff';
                context.fill();
                context.restore();

                if (curPerc < endPercent) {
                     curPerc += curStep;
                     if(window.requestAnimationFrame){
                         requestAnimationFrame(function () {
                            /**
                             * [修改] 降低圆形进度条速度
                             **/
                            setTimeout(function(){
                                animate(Math.min(curPerc, endPercent) / 100);
                            }, 40);
                         });
                     }else{
                        setTimeout(function(){
                            animate(Math.min(curPerc, endPercent) / 100);
                        }, 40);
                     }
                }
             }
             animate(curPerc / 100);
        });
    };
}( jQuery ));