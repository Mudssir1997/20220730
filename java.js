function gold(){
    let goldAmount= document.getElementById('goldAmount').value;
    if (goldAmount>=7.5)

{
    let golZakat = goldAmount*120000 /40;
    document.getElementById('showResult').innerText= golZakat ;
    }
    else 
        {
           
            document.getElementById('showResult').innerHTML="Your Zakat is not applicable";
        }
        
}



function silver(){
    let silverAmount= document.getElementById('silverAmount').value;
    if (silverAmount>=52.5)

{
    let silverZakat = silverAmount*1500 /40;
    document.getElementById('result').innerText= silverZakat ;
    }
    else 
        {
           
            document.getElementById('result').innerHTML="Your Zakat is not applicable";
        }
        
}

function cash(){
    let cashAmount= document.getElementById('cashAmount').value;
    if (cashAmount>=85050)

{
    let cashZakat = cashAmount/40;
    document.getElementById('cashresult').innerText= cashZakat ;
    }
    else 
        {
           
            document.getElementById('cashresult').innerHTML="Your Zakat is not applicable";
        }
        
}