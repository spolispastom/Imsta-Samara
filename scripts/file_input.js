window.onload = WindowOnLoad;
var fileInput = document.getElementById('File1');
var fileName = document.createElement('div');
fileName.style.display = 'none';
fileName.style.background = 'url(images/icons.png)';
var activeButton = document.createElement('div');
var bb = document.createElement('div');
var bl = document.createElement('div');
function WindowOnLoad()
{
    var wrap = document.getElementById('wrapper');
    fileName.setAttribute('id','FileName');
    activeButton.setAttribute('id','activeBrowseButton');
    fileInput.value = '';
    fileInput.onchange = HandleChanges;
    fileInput.onmouseover = MakeActive;
    fileInput.onmouseout = UnMakeActive;
    fileInput.className = 'customFile';
    bl.className = 'blocker';
    bb.className = 'fakeButton';
    activeButton.className = 'fakeButton';
    wrap.appendChild(bb);
    wrap.appendChild(bl);
    
    wrap.appendChild(activeButton);
    
    wrap.appendChild(fileName);
   
    
};
function HandleChanges()
{
    file = fileInput.value;
    reWin = /.*\\(.*)/;
    var fileTitle = file.replace(reWin, "$1"); //âûäèðàåì íàçâàíèå ôàéëà
    reUnix = /.*\/(.*)/;
    fileTitle = fileTitle.replace(reUnix, "$1"); //âûäèðàåì íàçâàíèå ôàéëà
    fileName.innerHTML = fileTitle;
    
    var RegExExt =/.*\.(.*)/;
    var ext = fileTitle.replace(RegExExt, "$1");//è åãî ðàñøèðåíèå
    
    var pos;
    if (ext){
        switch (ext.toLowerCase())
        {
            case 'doc': pos = '0'; break;
            case 'bmp': pos = '16'; break;                       
            case 'jpg': pos = '32'; break;
            case 'jpeg': pos = '32'; break;
            case 'png': pos = '48'; break;
            case 'gif': pos = '64'; break;
            case 'psd': pos = '80'; break;
            case 'mp3': pos = '96'; break;
            case 'wav': pos = '96'; break;
            case 'ogg': pos = '96'; break;
            case 'avi': pos = '112'; break;
            case 'wmv': pos = '112'; break;
            case 'flv': pos = '112'; break;
            case 'pdf': pos = '128'; break;
            case 'exe': pos = '144'; break;
            case 'txt': pos = '160'; break;
            default: pos = '176'; break;
        };
        fileName.style.display = 'block';
        fileName.style.background = 'url(images/icons.png) no-repeat 0 -'+pos+'px';
    };
    
};
function MakeActive()
{
   activeButton.style.display = 'block';
};
function UnMakeActive()
{
    activeButton.style.display = 'none';
};