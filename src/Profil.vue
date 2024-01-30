<template>
      <h1>Profil</h1>
      <div class="orange_container" id="outer_container">
            <img src="./assets/6644b34c91f57f8d40a4eaa94e3cb797.png" />

            <div class="personal">
                  <h1 class="no_caret">
                        <span :style="{ color: '#e8672c' }">{{ user.displayUserName }} {{ user.lastName }}</span>
                  </h1>
                  <hr>
                  <div>
                        <div class ="border">
                              <div class = "inner-left">
                                    Rolle:
                              </div>
                              <div class = "inner-right">
                                    {{ user.rolle }}
                              </div>
                        </div>
                        <div class ="border">
                              <div class = "inner-left">
                                    E-Mail:
                              </div>
                              <div class = "inner-right">
                                    {{ user.email }}
                              </div>
                        </div>
                        <div class ="border">
                              <div class = "inner-left">
                                    Matrikelnummer:
                              </div>
                              <div class = "inner-right">
                                    174056
                              </div>
                        </div>
                        <div class ="border">
                              <div class = "inner-left">
                                    Geburtsdatum:
                              </div>
                              <div class = "inner-right">
                                    31.12.2000
                              </div>
                        </div>
                        <div class ="border">
                              <div class = "inner-left">
                                    Persönliche E-Mail:
                              </div>
                              <div class = "inner-right">
                                    anna@example.com
                              </div>
                        </div>
                  </div>
            </div>
      </div>

</template>
    
<script>
export default {
      computed: {
            user() {
                  const user = this.$store.getters.getUser;
                  return {
                        displayUserName: user?.name || "Max",
                        lastName: user?.lastName,
                        rolle: user?.role,
                        email: user?.email,
                        semester: user?.semester
                  };
            }
      }
}
</script>
    
<style scoped>

td{
      width: 50%;
}

.inner-left{
      padding-left: 10px;
      font-weight: 650;
      width: 50%;
      float: left;
}
.inner-right{
      width: 50%;
      display: flex;
}

.border{
      border: 1px solid rgb(232, 104, 44);
      border-radius: 10px;
      padding: 5px;
      background-color: #8686863b;
      margin: auto;
      max-width: 1200px;
      margin-top: 30px;
      margin-bottom: 30px;
      color: white;
}

#outer_container{
      display: flex;
      max-width: 1000px;
      text-align: left;
}

img {
      width: calc(50% - 20px);
      border-radius: 20px;
      max-width: 400px;
      margin-right: 20px;
}

.personal {
      font-size: 18px;
      flex-grow: 1;
}
</style>
    