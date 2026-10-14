export const getOperasiHitung = () => {
  const tambah = (a, b) => a + b;
  const kurang = (a, b) => a - b;
  const kali = (a, b) => a * b;
  const bagi = (a, b) => a / b;
  const sisa = (a, b) => a % b;

  return [tambah, kurang, kali, bagi, sisa];
};


export const getSapaan = () => {
  return {
    sapaPagi: (nama) => "Selamat pagi, " + nama,
    sapaSiang: (nama) => "Selamat siang, " + nama,
    sapaSore: (nama) => "Selamat sore, " + nama,
    sapaMalam: (nama) => "Selamat malam, " + nama,
    sapaUmum: (nama) => "Halo, " + nama,
  };
};