let fname="Aaditi"
    let fullname="Aaditi Harale"

    let u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let l = "abcdefghijklmnopqrstuvwxyz"
    let res=''
    for(let i=0; i<fname.length;i++)
    {
        for(let j=0;j<u.length;j++)
        {
            if(fname[i]==l[j])
            {
                res=res+u[j]
            }
            if(fname[i]==u[j])
            {
                res=res+u[j]
            }
        }
    }
    console.log(res);