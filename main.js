// Пока здесь пусто — добавьте свой JavaScript-код при необходимости

// Автоматический захват идентификатора клика «yclid» и сохранение его в cookie/localStorage
(function captureYandexClickId() {
  const params = new URLSearchParams(window.location.search);
  const yclid = params.get('yclid');
  if (yclid) {
    // Сохраняем в cookie на 30 дней
    document.cookie = `yclid=${yclid}; path=/; max-age=${60 * 60 * 24 * 30}`;
    // Дублируем в localStorage, если доступен
    try {
      localStorage.setItem('yclid', yclid);
    } catch (_) {/* ignore quota errors */}
  }
})();

// Получение clientID из Яндекс Метрики (требуется подключённый счётчик)
// Замените 12345678 на реальный ID счётчика Метрики
if (typeof ym === 'function') {
  ym(12345678, 'getClientID', function(clientId) {
    if (clientId) {
      try {
        localStorage.setItem('ym_client_id', clientId);
      } catch (_) {/* ignore */}
    }
  });
} 