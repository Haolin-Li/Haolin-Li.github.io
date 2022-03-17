const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [{
        name: '亲爱的旅人啊（Cover：木村弓）',
        artist: '周深',
        lrc: '',
        cover: 'http://p1.music.126.net/1YrCPOBV314i-mTtlDg8mQ==/109951164148664637.jpg?param=130y130',
        url: '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1371939273&auto=1&height=66"></iframe>'
    },
    {
        name: '陈情令：无羁',
        artist: '天道酬勤',
        lrc: '',
        cover: 'http://p1.music.126.net/8K3RjUJ89ms3lq-RDsCNAw==/109951166147932982.jpg?param=130y130',
        url: '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1858673635&auto=1&height=66"></iframe>'
    },
    {
        name: '不染',
        artist: '毛不易',
        cover: 'http://p2.music.126.net/gEia-o05FSas8uJos54Sug==/109951163456726954.jpg?param=130y130',
        lrc:'',
        url: '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=536099160&auto=1&height=66"></iframe>'

    }
]
});