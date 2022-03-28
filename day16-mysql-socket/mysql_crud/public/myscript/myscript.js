function refresh() {
    $.ajax({
        url: "/data",
        success: function (res, statusText, jqxhr) {
            
            $(res.heroes).each(function (idx) {
                $("#usergrid").append(
                    `<tr>
                        <th scope="row">${idx+1}</th>
                        <td>${res['heroes'][idx].heroname}</td>
                        <td>${res['heroes'][idx].heroemail}</td>
                        <td>${res['heroes'][idx].herocity}</td>
                        <td><button data-edit="${res[idx].id}" class="btn btn-warning">Edit Hero</button></td>
                        <td><button data-del="${res[idx].id}" class="btn btn-danger">Delete Hero</button></td>
                    </tr>`
                );
            });
        },
        error: function (jqxhr, textStatus, error) {
            console.log('Error: ', error);
        }
    });
}

function deleteUserHandler(evt){
    $.ajax({
        method : 'delete',
        url : "/delete/"+$(evt.target).attr("data-del"),
        success : function(res){
            console.log(res);
            //refresh();
        },
        error : function(err){
            console.log("Error ",err)
        }
    })
}

function editUserHandler(evt){
    $("#edituserbox").show(500);
    $("#adduserbox").hide(500);
    $.ajax({
        method : 'get',
        url : "/edit/"+$(evt.target).attr("data-edit"),
        success : function(res){
            $("#edit_username").val(res.heroname);
            $("#edit_usermail").val(res.heroemail);
            $("#edit_usercity").val(res.herocity);
            $("#edit_userid").val(res._id);
        },
        error : function(err){
            console.log("Error ",err)
        }
    })
    };

function updateUserHandler(){
    let updatedhero = {
        heroname : $("#edit_username").val(),
        heroemail : $("#edit_usermail").val(),
        herocity : $("#edit_usercity").val()
    };
    $.ajax({
            method : 'post',
            url : "/edit/"+$("#edit_userid").val(),
            data : JSON.stringify(updatedhero),
            contentType : "application/json",
            dataType : "json",
            success : function(res){
                $("#edituserbox").hide(500);
                $("#adduserbox").show(500);
                $("#edit_username").val('');
                $("#edit_usermail").val('');
                $("#edit_usercity").val('');
                //refresh();
                console.log(res.updatedmessage);
            },
            error : function(err){
                console.log("Error ",err)
            }
        })
}
function addUserHandler(){
    if($("#username").val() || $("#usermail").val() || $("#usercity").val()){
        let nuser = {
            heroname : $("#username").val(),
            heroemail : $("#usermail").val(),
            herocity : $("#usercity").val()
        };
        console.log(nuser);
        $.ajax({
            method : 'post',
            url : "/add",
            data : JSON.stringify(nuser),
            contentType : "application/json",
            dataType : "json",
            success : function(res){
                $("#username").val('');
                $("#usermail").val('');
                $("#usercity").val('');
                refresh();
            },
            error : function(err){
                console.log("Error ",err)
            }
        })
    }else{
        alert("please fill all user details")
    }
}

$(function () {
    $("#edituserbox").hide();
    refresh();


    $("#usergrid").on('click', '.btn-danger', deleteUserHandler);
    $("#usergrid").on('click', '.btn-warning', editUserHandler);
    $("#addBtn").on('click', addUserHandler);
    $("#editBtn").on('click', updateUserHandler);
})