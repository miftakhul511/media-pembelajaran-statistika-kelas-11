/* Gerbang akses untuk media HTML statis. */
(function () {
  'use strict';
  const scope = new URL('../', document.currentScript.src).pathname;
  const key = 'statistika-explorer-access-v1:' + scope;
  let allowed = false;
  try { allowed = sessionStorage.getItem(key) === 'granted'; } catch (_) {}
  if (allowed) return;
  document.documentElement.classList.add('mpi-locked');
  const style = document.createElement('style');
  style.textContent = `html.mpi-locked body > :not(#mpi-access-gate){display:none!important}html.mpi-locked body{margin:0;min-height:100vh;background:#0b182b;color:#172554}#mpi-access-gate{min-height:100vh;min-height:100dvh;display:grid;place-items:center;padding:24px;box-sizing:border-box;background:radial-gradient(ellipse at top right,#155e75,transparent 65%),#0b182b;font-family:'Segoe UI',sans-serif}#mpi-access-gate *{box-sizing:border-box}#mpi-access-gate .access-card{width:100%;max-width:510px;background:#fff;border-radius:24px;padding:36px 28px;box-shadow:0 20px 65px #0005}#mpi-access-gate h1{font-size:30px;letter-spacing:0;line-height:1.25;color:#153b75;text-shadow:none;text-transform:none;margin:0 0 14px}#mpi-access-gate p{font-size:17px;line-height:1.65;margin:12px 0;color:#334155}#mpi-access-gate label{display:block;font-size:18px;font-weight:600;margin:24px 0 8px}#mpi-access-gate input{width:100%;padding:14px;border:2px solid #94a3b8;border-radius:12px;font-size:18px;margin:0}#mpi-access-gate button{display:block;width:100%;padding:15px;margin:16px 0 0;background:#2563eb;color:#fff;border:0;border-radius:12px;font-size:19px;font-weight:700;cursor:pointer}#mpi-access-gate :focus-visible{outline:3px solid #0891b2;outline-offset:3px}#mpi-access-gate .access-contact{border-top:1px solid #dbe3ef;margin-top:24px;padding-top:18px}#mpi-access-gate .access-contact strong{color:#172554}#mpi-access-gate #access-error{color:#b91c1c;min-height:28px;margin:8px 0 0}`;
  document.head.append(style);
  function mount() {
    const gate = document.createElement('main');
    gate.id = 'mpi-access-gate';
    gate.innerHTML = `<section class="access-card" aria-labelledby="access-title"><h1 id="access-title">Statistika Explorer</h1><p>Selamat datang di Media Pembelajaran Interaktif Matematika Kelas XI. Masukkan kode akses untuk memulai.</p><form id="access-form"><label for="access-code">Kode akses</label><input id="access-code" type="password" required autocomplete="off" autocapitalize="none" spellcheck="false" aria-describedby="access-error"><button type="submit">Mulai Media →</button><p id="access-error" role="status" aria-live="polite"></p></form><div class="access-contact"><p>Untuk mendapatkan kode akses, hubungi pemilik media:</p><p><strong>Miftakhul Hdiayat Zulfaqor, S.Si.</strong><br>SMA Kemala Bhayangkari 3 Porong</p></div></section>`;
    document.body.prepend(gate);
    const input = document.getElementById('access-code');
    document.getElementById('access-form').addEventListener('submit', function (event) {
      event.preventDefault();
      if (input.value !== 'Bhayangkari@3') {
        document.getElementById('access-error').textContent = 'Kode akses belum tepat. Periksa huruf besar, kecil, dan simbolnya.';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }
      try { sessionStorage.setItem(key, 'granted'); } catch (_) {}
      document.documentElement.classList.remove('mpi-locked');
      gate.remove();
      const title = document.querySelector('h1, h2');
      if (title) { title.setAttribute('tabindex', '-1'); title.focus({preventScroll:true}); }
      window.scrollTo(0, 0);
    });
    input.focus({preventScroll:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();
