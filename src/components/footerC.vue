<template>
    <footer class="footer">
        <div class="footer-content">
            <p style="white-space: nowrap;">
                © 2024 Space Pochta Solutions Inc.&nbsp;
                <a href="https://github.com/JonnyS02/hci_project">
                  <!--  <font-awesome-icon icon="fa-brands fa-github" style="font-size: 1.2em;" />-->
                </a>
            </p>
        </div>
    </footer>
</template>
  
<style scoped>
html,
body {
    height: 100%;
    margin: 0;
}

.footer {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
}

.footer-content {
    display: flex;
    flex-direction: column;
}

@media only screen and (max-width: 1020px) {
  .footer {
    position: unset;
    margin-top: 10px;
  }
}
</style>

  