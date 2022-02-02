let postss = [
    {
        _id: `${ Date.now() }`,
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.',
        media: { photo: "", video: "" },
        postedBy: 'byme',
        comments: [
            {
                commenter: 'Ahmed',
                UserPhoto: 'https://picsum.photos/50/50',
                commentaire: 'mon commentaire',
            },
            {
                commenter: 'Ahmed',
                UserPhoto: 'https://picsum.photos/50/50',
                commentaire: 'mon commentaire',
            },
        ],
        UserPhoto: 'https://picsum.photos/50/50',
    },
    {
        _id: `${ Date.now() }`,
        body: 'hiiii',
        media: { photo: "", video: "" },
        postedBy: 'byme',
        comments: [],
        UserPhoto: 'https://picsum.photos/50/50',
    },
    {
        _id: `${ Date.now() }`,
        body: 'hiiii',
        media: { photo: "", video: "" },
        postedBy: 'byme',
        comments: [],
        UserPhoto: 'https://picsum.photos/50/50',
    },
];

const list=document.getElementById('myposts');

const post = () =>{

postss.map((e)=>{

const poste=`<li>
<div class="card gedf-card">

<div class="card-header">
    <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
            <div class="mr-2">
                <img class="rounded-circle" width="45" src=${ e.UserPhoto
        ? e.UserPhoto
        : 'https://picsum.photos/50/50'
    } alt="">
            </div>
            <div class="ml-2">
                <div class="h5 m-0">${ e.postedBy }</div>
                <div class="h7 text-muted">Miracles Lee Cross</div>
            </div>
        </div>
    </div>
</div>

<div class="card-body d-flex flex-column">
<p class="card-text">
${ e.body }
</p>
  ${ e.media.photo
        ? `<img src='${ e.media.photo }' style="width: -webkit-fill-available;" height="auto" />`
        : ''
    }  
    ${ e.media.video
        ? `<video src='${ e.media.video }' style="width: -webkit-fill-available;" height="auto" controls ><video/>`
        : ''
    } 
</div>
<p>
<button class="btn btn-primary" type="button" data-toggle="collapse" id="collapseExample${ e._id }" data-target="#collapseExample${ e._id }" aria-expanded="false" aria-controls="collapseExample" style="    background: none;color: #b5acac;border: none;width: 100%; padding: 0;">
    Voir Commentaires
</button>
</p>
<div class="collapse" id="collapseExample${ e._id }">
    <ul class="list-group">
        ${ e.comments.map(
        ({ UserPhoto, commentaire, commenter }) => `
        <li class="list-group-item">
       <div class="d-flex">
       <img class="rounded-circle" width="45" src=${ UserPhoto
                ? UserPhoto
                : 'https://picsum.photos/50/50'
            } alt="">
       <p style="margin-left: 13px;">${ commenter }</p>
       </div>
        ${ commentaire }
        </li>
        `
    ) }
    </ul>
</div>

<div class="card-footer">
    <div class="input-group">
    <form onsubmit='prevent(event)' class="commentform d-flex w-100">
        <input type="text" class="form-control" id="comment" aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-primary" type="button" onclick='newcomment()' id="button-addon2">
                <i class="fa fa-comment"></i>
            </button>
        </div>
    </form>
    </div>
</div>
</div>
</li>`
list.innerHTML+=poste;
})///////fin map
 }////fin function post


 const affichecomment = (id) =>{

    

    

    console.log(inputcomment);


}










////////////////////////////////////////// preview/////////////////////////////////////////////////////
const geturl = (file,callback) =>{
    
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
    callback(reader.result)
  }

}

const handlefile = () =>{
    const fichier=document.querySelector('#customFile');
    geturl(fichier.files[0],(url)=>{
        const img=document.getElementById('image')
        img.src=url;
    })

}
///////////////////////////////////////////////////////////newpost/////////////////
const newpost = (event) =>{

    const id=`${Date.now()}`;
    const statut=document.getElementById('message');
    const fichier=document.querySelector('#customFile');

    geturl(fichier.files[0],(url)=>{
        let postejdida={
            _id:id,
            body:statut.value,
            media:{ photo:url , video:url },
            postedBy:'Emna Zayani',
            comments:[],
            UserPhoto:'https://picsum.photos/50/50'   
        };
        postss.push(postejdida);
        post();

    })

    event.preventDefault();
 }


 const newcomment = () =>{
   const inputcomment = document.getElementById("comment").value
   const listecomment = document.querySelector('.list-group');
   console.log(listecomment);

   let commentairejdid={

     commenter:'Emna',
     UserPhoto: 'https://picsum.photos/50/50',
    commentaire: inputcomment
    }

    postss.comments.push(commentairejdid);



postss.comments.map((e)=>{

    let newcomment= `
    <li class="list-group-item">
   <div class="d-flex">
   <img class="rounded-circle" width="45" src=${ e.UserPhoto
            ? e.UserPhoto
            : 'https://picsum.photos/50/50'
        } alt="">
   <p style="margin-left: 13px;">${ e.commenter }</p>
   </div>
    ${ e.commentaire }
    </li>
    `
    listecomment.innerHTML+=newcomment;


})

 }







