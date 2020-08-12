
/* 課題処理を追加 */
$(document).ready(
    function(){
//                    alert('test');
        var cnt=1;
        for(var i=1;i<=4;i++){
            var tr=$('<tr>');
            $('#matrix').append(tr);
            for(var j=1;j<=4;j++){
                var td=$('<td>');
                td.html(cnt);
                td.attr('id','td_'+cnt);
                tr.append(td);
                cnt++;
            }
            
        }
        
    }

);

var rand=0; // ルーレットを回すときに使う変数
var rou; // setIntervalとclearInterval用の変数
var array=[]; // 一度出た目を格納する変数
var i=0;　
var flag=false;
function start_rou(){
//                alert('test');
    //最終的のここの操作を自動的にタイマー設定する
    rou　=　setInterval(function(){
        $('#td_'+rand).removeClass('now');
        while(true){
            rand=Math.floor(Math.random()*16)+1;
            if(!array.includes(rand)){
                break;
            }
        }
        $('array').push(rand);
        $('#td_'+rand).addClass('now');
        $('#start').prop('disabled',true);
        $('#stop').prop('disabled',false);
        
    }
,200);
}

function stop_rou(){
    $('#stop').prop('disabled',true);
    clearInterval(rou);
    array[i]=rand;
    i++;
    $('#td_'+rand).removeClass('now');
    $('#td_'+rand).addClass('old');
    if(array.length!==16){
        $('#start').prop('disabled',false);
    }
}

function reset_rou(){
//                clearInterval(rou);
//                $('.now').removeClass('now');
//                $('.old').removeClass('old');
//                $('#start').prop('disabled',false);
//                rand=0;
//                リロードすれば初期状態になるので、クラスも初期化される
    location.reload();
}

$(document).ready(function(){
    $('#start').click(start_rou);
    $('#stop').click(stop_rou);
    $('#reset').click(reset_rou);
    $('#stop').prop('disabled',true);
});