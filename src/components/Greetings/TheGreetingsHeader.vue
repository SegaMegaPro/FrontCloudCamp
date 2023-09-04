<template>
<div class="greetingsHeaderWrapper">
  <div class="greetingsAvatar">
    ИИ
  </div>
  <div class="greetingsContentWrapper">
    <p>Иван Иванов</p>
    <div class="greetingsLinksWrapper">
      <a href="#" class="greetingsLink">
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.710016 1.96935L2.08181 0.524489C2.15733 0.444944 2.26221 0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045 5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999 6.76578 1.9999H12.4344C12.5405 1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001 2.8595 13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173 11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999 1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098 10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368 0.710016 1.96935Z" fill="#CCCCCC"/>
        </svg>
        Telegram
      </a>
      <a href="#" class="greetingsLink">
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.710016 1.96935L2.08181 0.524489C2.15733 0.444944 2.26221 0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045 5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999 6.76578 1.9999H12.4344C12.5405 1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001 2.8595 13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173 11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999 1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098 10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368 0.710016 1.96935Z" fill="#CCCCCC"/>
        </svg>
        GitHub
      </a>
      <a href="#" class="greetingsLink">
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.710016 1.96935L2.08181 0.524489C2.15733 0.444944 2.26221 0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045 5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999 6.76578 1.9999H12.4344C12.5405 1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001 2.8595 13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173 11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999 1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098 10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368 0.710016 1.96935Z" fill="#CCCCCC"/>
        </svg>
        Resume
      </a>
    </div>
  </div>
</div>
  <div class="greetingsBottomLine"></div>
</template>

<script>
export default {
  name: 'TheGreetingsHeader'
}
</script>

<style scoped>
.greetingsHeaderWrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin: 0 auto 0 auto;
  width: 900px;
  height: 129px;
  box-sizing: border-box;
}
.greetingsAvatar{
  background-color: #D5E4F7;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  text-align: center;
  box-sizing: border-box;
  margin-right: 24px;
  font-size: 40px;
  font-weight: 400;
}
.greetingsContentWrapper{
  width: 228px;
  height: 50px;
}
.greetingsContentWrapper p{
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 600;
}
.greetingsLinksWrapper{
  width: 228px;
  height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
}
.greetingsLink{
  color: #5558FA;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
}
.greetingsLink svg{
  margin-right: 4px;
}
.greetingsLink:link, .greetingsLink:visited, .greetingsLink:active{
  text-decoration: none;
}
.greetingsLink:hover{
  color: #0006ff;
}
.greetingsBottomLine{
  display: flex;
  align-self: flex-end;
  margin: 0 auto 0 auto;
  border: 1px solid #00000014;
  width: 852px;
}
</style>
