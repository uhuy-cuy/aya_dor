//import Head from "next/head";

//import Script from "next/script";
//import { useEffect } from "react";

//hapus tag atas untuk aktifkan

//export default function Home() {
//hapus tag atas untuk aktifkan
  useEffect(() => {
    if (typeof window !== "undefined" && window.Swal) {
      document.getElementById("tembakButton")?.addEventListener("click", () => {
        window.Swal.fire({
          title:
            "<span style='font-size: 26px; font-weight: bold;'>Aku Sayang Aya 💖</span>",
          html: `
            <p style="font-size:16px; color:#7c3a50;">
              Kalau aku jadi pilot, aku pasti gagal mendarat, karena udah terlanjur jatuh di hati Aya.<br><br>
              <strong style="font-size:18px; display:block;">Mau nggak Aya jadi pacarku, serta menerima semua kekurangan dan kelebihanku? 💘</strong>
            </p>
          `,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: `🌸 Aya Mau Banget! ❤️`,
          cancelButtonText: `😳 Nggak Mau`,
          allowOutsideClick: false,
          allowEscapeKey: false,
          background: "#ffe6eb",
          color: "#5c2c36",
          customClass: {
            popup: "swal-popup-romantic soft-popup",
            confirmButton: "swal-btn-confirm soft-btn",
            cancelButton: "swal-btn-cancel soft-btn",
          },
        }).then((result) => {
          let keterangan = "";
          let jawaban = 0;

          if (result.isConfirmed) {
            keterangan = "Aya udah buat aku jadi orang paling bahagia!";
            jawaban = 1;

            window.Swal.fire({
              title: "<strong style='font-size: 24px;'>Yeayy, Terimakasih Cantik :) 💞</strong>",
              html: `<p style='font-size: 18px;'>${keterangan}</p>`,
              icon: "success",
              background: "#ffe6eb",
              color: "#5c2c36",
              confirmButtonText: "Awww 💖",
              allowOutsideClick: false,
              allowEscapeKey: false,
              customClass: {
                popup: "swal-popup-romantic",
                confirmButton: "swal-btn-confirm",
              },
            });
          } else if (result.dismiss === window.Swal.DismissReason.cancel) {
            keterangan =
              "Yahh... Gapapa kok, aku ngerti kalau kamu butuh waktu";
            jawaban = 0;

            window.Swal.fire({
              title: "<strong style='font-size: 24px;'>Yahh... 😢</strong>",
              html: `<p style='font-size: 18px;'>${keterangan}</p>`,
              icon: "info",
              background: "#ffe6eb",
              color: "#5c2c36",
              confirmButtonText: "Peluk Dulu 🤗",
              allowOutsideClick: false,
              allowEscapeKey: false,
              customClass: {
                popup: "swal-popup-romantic",
                confirmButton: "swal-btn-cancel",
              },
            });
          } else {
            console.log("User keluar tanpa pilih jawaban.");
            return;
          }

          window.$.ajax({
            url: "/api/simpan_jawaban",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ keterangan, jawaban }),
            success: function (response) {
              console.log("Data berhasil disimpan:", response);
            },
            error: function () {
              console.error("Terjadi kesalahan saat menyimpan data.");
            },
          });
        });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>💘 Aya & @tahirwiyann</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .swal-popup-romantic {
        border-radius: 35px !important;
        box-shadow: 0 12px 30px rgba(255, 105, 180, 0.25) !important;
        padding: 30px !important;
        animation: fadeInSweet 0.6s ease-in-out !important;
        backdrop-filter: blur(8px);
        border: 2px dashed #f78ca0;
        transition: all 0.3s ease-in-out;
        }

          .swal-btn-confirm {
            background: linear-gradient(to right, #f78ca0, #f9748f) !important;
            color: white !important;
            border-radius: 999px !important;
            font-weight: bold !important;
            padding: 14px 32px !important;
            font-size: 17px !important;
            border: none !important;
          }
          .swal-btn-cancel {
           background: linear-gradient(to right, #e0c3fc, #8ec5fc) !important;

            color: white !important;
            border-radius: 999px !important;
            font-weight: bold !important;
            padding: 14px 32px !important;
            font-size: 17px !important;
            border: none !important;
          }
          @keyframes fadeInSweet {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/sweetalert2@11"
        strategy="beforeInteractive"
      />
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
      />

      <div className="content">
        <h1>Aya Sayang ada yang ingin aku katakan :)</h1>
        <p>
          Setiap detik yang kulalui bersama Aya terasa begitu berarti. Senyummu
          bagaikan cahaya hangat yang menerangi hari-hariku. Jujur, aku nggak
          mau lagi menyimpan rasa ini sendirian.
        </p>
        <p>
          Boleh nggak, aku jadi bagian dari hidup Aya, bukan cuma sebagai teman,
          tapi sebagai seseorang yang selalu ada di sampingmu.
        </p>
        <button id="tembakButton">Jawab dengan hatimu ya Ayaa ❤️</button>
      </div>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
          background: linear-gradient(135deg, #ffe6eb, #ffd1e3);
          color: #5c2c36;
        }
      `}</style>

      <style jsx>{`
        h1 {
          font-size: 32px;
          margin-bottom: 10px;
          color: #e75480;
        }
        .content {
          background: #fff0f5;
          padding: 30px;
          margin: 20px auto;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          animation: fadeIn 3s ease;
          border: 2px dashed #ffb6c1;
          text-align: center;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        button {
          background-color: #ff6fa5;
          color: white;
          border: none;
          padding: 12px 28px;
          margin-top: 25px;
          font-size: 16px;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(255, 111, 165, 0.4);
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #ff4f8b;
        }
        p {
          line-height: 1.8;
          font-size: 16px;
          color: #7c3a50;
        }
      `}</style>
    </>
  );
}
