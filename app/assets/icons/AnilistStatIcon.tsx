const Good = () => (
  <path
    fill="rgb(93,193,47)"
    stroke="none"
    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
  />
);

const Average = () => (
  <path
    fill="rgb(247,154,99)"
    stroke="none"
    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm8 144H160c-13.2 0-24 10.8-24 24s10.8 24 24 24h176c13.2 0 24-10.8 24-24s-10.8-24-24-24z"
  />
);

const Bad = () => (
  <path
    fill="rgb(232,93,117)"
    stroke="none"
    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"
  />
);

interface IAnilistStatProps {
  /**
   * The stat to display
   * @default 'good'
   * @type 'good' | 'average' | 'bad'
   * @example 'good'
   * @example 'average'
   * @example 'bad'
   */
  stat?: 'good' | 'average' | 'bad';
  /**
   * The size of the icon
   * @default 24
   * @type number
   * @example 24
   * @example 32
   * @example 48
   */
  size?: number;
  /**
   * The height of the icon
   * @default 24
   * @type number
   * @example 24
   * @example 32
   * @example 48
   */
  height?: number;
  /**
   * The width of the icon
   * @default 24
   * @type number
   * @example 24
   * @example 32
   * @example 48
   */
  width?: number;
}

const AnilistStat = ({
  stat = 'good',
  size = 24,
  height = 24,
  width = 24,
  ...props
}: IAnilistStatProps) => {
  switch (stat) {
    case 'average':
      return (
        <svg
          className="inline"
          width={width || size}
          height={height || size}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Average />
        </svg>
      );
    case 'bad':
      return (
        <svg
          className="inline"
          width={width || size}
          height={height || size}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Bad />
        </svg>
      );
    default:
      return (
        <svg
          className="inline"
          width={width || size}
          height={height || size}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Good />
        </svg>
      );
  }
};

export default AnilistStat;
