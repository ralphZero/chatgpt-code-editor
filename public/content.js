const iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="28" fill="currentColor"><path d="M12.7361611,0.063952038 C13.2551391,0.263360331 13.5227261,0.869148905 13.3338336,1.41701869 L8.54555162,15.3051026 C8.35665911,15.8529724 7.78281676,16.1354563 7.26383885,15.936048 C6.74486095,15.7366397 6.47727387,15.1308511 6.66616638,14.5829813 L11.4544484,0.694897379 C11.6433409,0.147027596 12.2171832,-0.135456255 12.7361611,0.063952038 Z M2.41421356,8.25614867 L5.94974747,11.9885083 C6.34027176,12.4007734 6.34027176,13.0691871 5.94974747,13.4814522 C5.55922318,13.8937173 4.9260582,13.8937173 4.53553391,13.4814522 L0.292893219,9.0026206 C-0.0976310729,8.59035554 -0.0976310729,7.9219418 0.292893219,7.50967674 L4.53553391,3.03084515 C4.9260582,2.61858008 5.55922318,2.61858008 5.94974747,3.03084515 C6.34027176,3.44311021 6.34027176,4.11152395 5.94974747,4.52378901 L2.41421356,8.25614867 Z M17.5857864,8.25614867 L14.0502525,4.52378901 C13.6597282,4.11152395 13.6597282,3.44311021 14.0502525,3.03084515 C14.4407768,2.61858008 15.0739418,2.61858008 15.4644661,3.03084515 L19.7071068,7.50967674 C20.0976311,7.9219418 20.0976311,8.59035554 19.7071068,9.0026206 L15.4644661,13.4814522 C15.0739418,13.8937173 14.4407768,13.8937173 14.0502525,13.4814522 C13.6597282,13.0691871 13.6597282,12.4007734 14.0502525,11.9885083 L17.5857864,8.25614867 Z"></path></svg>`;
const styleHTML = `<style>
  @keyframes slideInFromLeft {
    0% {
      padding-inline: 0;
      width: 0;
      opacity: 0;
    }
    35% {
      opacity: 0.4;
    }
    100% {
      padding-inline: 0;
      width: auto;
      opacity: 1;
    }
  }
  .chatgpt-code-editor-btn {
    background-color: #037e6f;
    border-radius: 32px;
    position: absolute;
    padding: 5px;
    z-index: 3;
    top: -25px;
    left: 0;
    display: flex;
  }
  .chatgpt-code-editor-btn span {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    padding-inline: 3px;
    overflow: hidden;
    text-wrap: nowrap;
    padding-inline: 0;
    width: 0;
    opacity: 0;
    transition: width 1.5s ease-in-out, padding-inline 0.3s ease-in-out, opacity 0.5s ease-out;
  }
  .chatgpt-code-editor-btn:hover {
    background-color: #009483;
  }
  .chatgpt-code-editor-btn:hover span {
    padding-inline: 3px;
    width: auto;
    opacity: 1;
  }
  .chatgpt-code-editor-btn svg {
    height: 24px;
    width: 24px;
    fill: #ffffff;
  }
</style>`;
const btnHTML = `<button type="button" class="chatgpt-code-editor-btn">
${iconHTML}
<span>Open Code Editor</span>
</button>${styleHTML}`;
const firstFormFoundInPage = document.querySelector('form');
firstFormFoundInPage.style.position = 'relative';
firstFormFoundInPage.insertAdjacentHTML('afterbegin', btnHTML);