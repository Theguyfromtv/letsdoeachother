
function quastionaire() {
$("#form").slideUp();
$("#form2").slideDown();
          var name= $("#name").val().trim()
          var me= $("#me").val()
          var them= $("#them").val()
          var image= ""
          var uid= ""
          
          firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            if (error) throw (error)
            else{
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                      // User is signed in.
                        var uid = user.uid;
                        var email= user.email;
                        function writeUserData(userId, name, email, imageUrl, me, them) {
                            firebase.database().ref('users/' + userId).set({
                            uid:userId,
                            name: name,
                            me:me,
                            them:them,
                            email: email,
                            profile_picture : imageUrl
                            });
                            }
                            writeUserData(uid, name, email, image, me, them);

                    } else {
                     
                    }
            })
        }

        })
            // ..
        

        }
        
