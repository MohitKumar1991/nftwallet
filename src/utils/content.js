console.log("Content.js running!!");
const ethprice = document.querySelectorAll(".Price--amount"); // for opensea
const ethlogo = document.querySelectorAll(".Price--eth-icon");
const ethlogo2 = document.querySelectorAll(
  ".Avatarreact__ImgAvatar-sc-sbw25j-1"
);
for (const e of ethlogo2) {
  e.style["display"] = "none";
}
for (const e of ethlogo) {
  e.style["display"] = "none";
}
for (const e of ethprice) {
  const dollar = 3149 * e.textContent;
  e.textContent = `$ ${dollar.toFixed(2)}`;
}

const hello = document.querySelectorAll(
  ".sc-bdnxRM .sc-hKFxyN .sc-eCApnc .iAEatC"
);
