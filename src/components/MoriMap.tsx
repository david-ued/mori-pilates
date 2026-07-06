import type { Locale } from '@/lib/i18n';

const LABELS: Record<
  Locale,
  {
    xinyi: string;
    jinshan: string;
    yongkang: string;
    lishui: string;
    mrt: string;
    exit: string;
    walk: string;
    studio: string;
    floor: string;
    north: string;
  }
> = {
  'zh-TW': {
    xinyi: '信義路二段',
    jinshan: '金山南路二段',
    yongkang: '永康街',
    lishui: '麗水街',
    mrt: '捷運東門站',
    exit: '出口 3',
    walk: '步行約 2 分鐘',
    studio: 'MORI PILATES',
    floor: '8F',
    north: 'N',
  },
  en: {
    xinyi: 'Xinyi Rd. Sec. 2',
    jinshan: 'Jinshan S. Rd. Sec. 2',
    yongkang: 'Yongkang St.',
    lishui: 'Lishui St.',
    mrt: 'MRT Dongmen',
    exit: 'Exit 3',
    walk: '~2 min walk',
    studio: 'MORI PILATES',
    floor: '8F',
    north: 'N',
  },
  ja: {
    xinyi: '信義路二段',
    jinshan: '金山南路二段',
    yongkang: '永康街',
    lishui: '麗水街',
    mrt: 'MRT東門駅',
    exit: '出口3',
    walk: '徒歩約2分',
    studio: 'MORI PILATES',
    floor: '8F',
    north: 'N',
  },
};

/**
 * Hand-drawn style wayfinding map: MRT Dongmen → Mori Pilates.
 * Stylized (not to scale) — the Google Maps embed next to it provides exact navigation.
 */
export function MoriMap({ locale, className = '' }: { locale: Locale; className?: string }) {
  const t = LABELS[locale];
  const road = '#eceada';
  const roadEdge = '#dcd9c4';

  return (
    <svg
      viewBox="0 0 720 480"
      role="img"
      aria-label={`${t.mrt} → ${t.studio} ${t.walk}`}
      className={className}
    >
      {/* paper */}
      <rect width="720" height="480" fill="#FCFCF0" />

      {/* soft forest texture: scattered leaf dots */}
      <g fill="#57805C" opacity="0.1">
        {[
          [60, 60, 5], [110, 92, 3], [70, 130, 4], [645, 420, 5], [600, 448, 3],
          [668, 380, 4], [640, 70, 4], [672, 110, 3], [80, 420, 4], [130, 445, 3],
          [40, 380, 3], [350, 60, 3], [420, 88, 4], [255, 430, 4], [200, 60, 3],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} />
        ))}
      </g>

      {/* Daan park hint (east) */}
      <g opacity="0.55">
        <rect x="640" y="150" width="80" height="120" rx="14" fill="#E6EBE0" />
        <circle cx="676" cy="185" r="9" fill="#7A9C7E" opacity="0.5" />
        <circle cx="698" cy="215" r="7" fill="#7A9C7E" opacity="0.4" />
        <circle cx="672" cy="238" r="8" fill="#7A9C7E" opacity="0.45" />
      </g>

      {/* --- streets --- */}
      {/* Xinyi Rd (horizontal) */}
      <rect x="0" y="182" width="720" height="40" fill={road} stroke={roadEdge} strokeWidth="1.5" />
      {/* Jinshan S. Rd (vertical) */}
      <rect x="540" y="0" width="36" height="480" fill={road} stroke={roadEdge} strokeWidth="1.5" />
      {/* Yongkang St (small, south) */}
      <rect x="288" y="222" width="24" height="258" fill={road} stroke={roadEdge} strokeWidth="1" opacity="0.9" />
      {/* Lishui St (small, south) */}
      <rect x="424" y="222" width="22" height="258" fill={road} stroke={roadEdge} strokeWidth="1" opacity="0.9" />

      {/* street center lines */}
      <line x1="0" y1="202" x2="720" y2="202" stroke="#d4d1b8" strokeWidth="1.5" strokeDasharray="14 12" />
      <line x1="558" y1="0" x2="558" y2="480" stroke="#d4d1b8" strokeWidth="1.5" strokeDasharray="14 12" />

      {/* street labels */}
      <text x="52" y="172" fontSize="15" letterSpacing="2" fill="#55524E">{t.xinyi}</text>
      <g transform="translate(583 258) rotate(90)">
        <text fontSize="15" letterSpacing="2" fill="#55524E">{t.jinshan}</text>
      </g>
      <g transform="translate(281 320) rotate(90)">
        <text fontSize="12" letterSpacing="1.5" fill="#84816f">{t.yongkang}</text>
      </g>
      <g transform="translate(419 320) rotate(90)">
        <text fontSize="12" letterSpacing="1.5" fill="#84816f">{t.lishui}</text>
      </g>

      {/* --- walking route: Exit 3 → studio --- */}
      <path
        d="M 196 226 L 530 226 Q 538 226 540 232 L 540 236"
        fill="none"
        stroke="#57805C"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="map-walk-route"
      />
      {/* walk time tag */}
      <g>
        <rect x="300" y="240" rx="13" width="126" height="26" fill="#57805C" opacity="0.92" />
        <text x="363" y="257" fontSize="13" letterSpacing="1" fill="#FCFCF0" textAnchor="middle">
          {t.walk}
        </text>
      </g>

      {/* --- MRT Dongmen --- */}
      <g>
        <circle cx="160" cy="202" r="17" fill="#FCFCF0" stroke="#57805C" strokeWidth="3" />
        <text x="160" y="207" fontSize="13" fontWeight="600" fill="#435F47" textAnchor="middle">M</text>
        <rect x="96" y="130" rx="14" width="128" height="28" fill="#242121" />
        <text x="160" y="149" fontSize="13" letterSpacing="1" fill="#FCFCF0" textAnchor="middle">
          {t.mrt}
        </text>
        <line x1="160" y1="158" x2="160" y2="185" stroke="#242121" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        {/* Exit 3 */}
        <circle cx="196" cy="226" r="5" fill="#242121" />
        <text x="196" y="284" fontSize="12" letterSpacing="1" fill="#55524E" textAnchor="middle">
          {t.exit}
        </text>
        <line x1="196" y1="234" x2="196" y2="270" stroke="#55524E" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
      </g>

      {/* --- Studio pin (SW corner of Xinyi × Jinshan) --- */}
      <g>
        <circle cx="540" cy="252" r="20" fill="#57805C" opacity="0.3" className="map-pin-pulse" />
        <g className="map-pin-bob">
          <path
            d="M 540 214 c -14 0 -24 10 -24 23 c 0 16 24 36 24 36 c 0 0 24 -20 24 -36 c 0 -13 -10 -23 -24 -23 z"
            fill="#57805C"
            stroke="#435F47"
            strokeWidth="1.5"
          />
          <circle cx="540" cy="238" r="9" fill="#FCFCF0" />
          <text x="540" y="242.5" fontSize="9" fontWeight="700" fill="#435F47" textAnchor="middle">
            {t.floor}
          </text>
        </g>
        <rect x="466" y="286" rx="15" width="148" height="30" fill="#FCFCF0" stroke="#57805C" strokeWidth="1.5" />
        <text x="540" y="306" fontSize="13" fontWeight="600" letterSpacing="2" fill="#435F47" textAnchor="middle">
          {t.studio}
        </text>
      </g>

      {/* compass */}
      <g transform="translate(672 44)">
        <circle r="20" fill="none" stroke="#55524E" strokeWidth="1" opacity="0.55" />
        <path d="M 0 -13 L 5 8 L 0 4 L -5 8 Z" fill="#57805C" />
        <text y="-26" fontSize="12" fill="#55524E" textAnchor="middle">{t.north}</text>
      </g>
    </svg>
  );
}
