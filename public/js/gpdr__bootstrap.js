//indexed db config
const CONFIG = {
    db: "GPDR",
    key: "id",
    table: "agreements",
    ver:1
};
//db init 
let request = window.indexedDB.open(CONFIG.db,CONFIG.ver);
request.onupgradeneeded = function() {
    var db = request.result;
    if (!db.objectStoreNames.contains(CONFIG.table)) { 
        db.createObjectStore(CONFIG.table, {keyPath: CONFIG.key}); 
    }
};   
request.onerror = function() {
    console.error("Unable to access database", request.error);
};
request.onsuccess = function() {
    var db = request.result;
    checkGPDR();
};
//indexed db functions
function get(keyA){
    return request.result.transaction(CONFIG.table,"readwrite")
    .objectStore(CONFIG.table)
    .get(keyA);
}
function getall(){
    return request.result.transaction(CONFIG.table,"readwrite")
    .objectStore(CONFIG.table)
    .getAll();
}
function put(keyA,valA){
    request.result
    .transaction(CONFIG.table,"readwrite")
    .objectStore(CONFIG.table)
    .put({id:keyA,value:valA});
}
function del(keyA){
    request.result
    .transaction(CONFIG.table,"readwrite")
    .objectStore(CONFIG.table)
    .delete(keyA);
}
function clear(){
    request.result
    .transaction(CONFIG.table,"readwrite")
    .objectStore(CONFIG.table)
    .clear();
}
//GPDR functions
function showGPDR(modalId){
    if(document.getElementById("gpdr-modal")===null){
        var modal = document.createElement("div");
        modal.innerHTML = `<div class="w-100">
            <div class="modal" id="gpdr-modal">
                <div class="modal-dialog fixed-bottom small">
                    <div class="modal-content small rounded-0 text-dark">
                        <div class="modal-header small py-2">
                            <h6 class="ms-0 text-start mb-0">
                                GPDR Declaration
                            </h6>
                        </div>
                        <div class="modal-body">
                            <p class="text-start">
                                This website was created in demonstration purposes. It collect and process
                                data only to present operation of it's functionality. All data provided by
                                user is removed after the end of demonstration process. Click button 'more"
                                to get more information about privacy policy. If you accept presented rules
                                click "accept" button.                                
                            </p>
                            <div class="w-100 text-right">
                                <a href="/privacy" class="btn btn-sm btn-outline-secondary rounded-pill">More</a>
                                <button class="btn btn-sm btn-outline-secondary rounded-pill" 
                                    data-bs-dismiss="modal" 
                                    data-bs-target="#gpdr-modal"
                                    onclick="acceptGPDR()">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`; 
        document.body.appendChild(modal);
    }
    var myModal = $("#gpdr-modal").modal();
    myModal.show();
}
function checkGPDR(){
    var x = get("privacy");
    x.onsuccess = function(){
        try{
            if(!x.result.value==="accepted"){
                showGPDR("#gpdr-modal");                        
            }
        }
        catch{
            showGPDR("#gpdr-modal");         
        }
    };
    x.onerror = function(){
        console.log("Error while checking GPDR status");
    };
}
function acceptGPDR(){
    put("privacy","accepted");
    $("#gpdr-modal").modal('hide');
}