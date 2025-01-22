function handleRedirect(discountCode, targetUrl) {
    // 將折扣碼複製到剪貼簿
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = discountCode;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // 跳轉到目標網址
    window.location.href = targetUrl;
}
