let id = document.getElementById("body_song").innerHTML

    //const API = 'https://music.niubishanshan.top/api/v2/music/search/%E8%AE%B8%E5%B5%A9/1/30'
     
    //封装方法
    let Obj = {
        input: function(text){
            console.log(text);
            if(text == ''){
                alert('请输入你要搜索的歌曲或歌手')
            }
        },

        judge: function(arr_main,text,ol){
            

            for(let i = 0;i < arr_main.length;i++){
                console.log(11);
                let li = document.createElement('li')
                //ul放在div里无法识别
                console.log(li);
                console.log(ol);

                
                    console.log(22);
                    
                    let result ='歌曲名：' + arr_main[i].songName + '|' + '歌手名：' + arr_main[i].singer[0].singerName
                    li.innerHTML = result
                    ol.appendChild(li)
    
                
            }
        },

        if_not: function(newLi){
            if(newLi.length == 0){
                alert('没有你要搜索的音乐')
            }
        }
    }
    let btn = document.getElementById('btn')
    
    btn.addEventListener('click',() =>{
        const xhr = new XMLHttpRequest()
        console.log(xhr)
        let text = document.getElementById('text').value

        const API = 'https://music.niubishanshan.top/api/v2/music/search/'
        xhr.open('GET', API + text, true)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById("body_song").innerHTML = '欢迎来到QQ音乐'

                const arr = JSON.parse(xhr.responseText)
                console.log(arr)
                let arr_main = arr.data.songList
                console.log(arr_main );


                Obj.input(text)
       
                let ol = document.getElementById('ol')
                Obj.judge(arr_main,text,ol)
                
                let newLi = document.getElementsByTagName('li')
                Obj.if_not(newLi)


                console.log(xhr.responseText)
                console.log('请求成功')
            } else {
                console.log('请求错误')
            }
            }
        }

        xhr.send()

    }
    )
