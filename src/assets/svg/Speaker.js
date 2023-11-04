const Speaker = ({ color }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_28_17)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2591 5.81205C16.2691 5.35224 16.1516 4.89864 15.9197 4.50146C15.6878 4.10428 15.3506 3.779 14.9453 3.56162C14.54 3.34424 14.0824 3.24323 13.6233 3.26978C13.1641 3.29633 12.7213 3.4494 12.3437 3.71205L12.3386 3.71547L5.70257 8.3749H3.40199C1.99628 8.3749 0.830566 9.54062 0.830566 10.9463V14.3749C0.830566 15.7806 1.99628 16.9463 3.40199 16.9463H5.69742L12.1774 21.6023L12.1894 21.6109C13.8523 22.7629 16.2146 21.5698 16.2591 19.5366V5.81205ZM20.958 6.51147C21.0881 6.40386 21.2382 6.32292 21.3996 6.27329C21.5609 6.22367 21.7305 6.20632 21.8986 6.22223C22.0667 6.23815 22.2301 6.28703 22.3793 6.36607C22.5285 6.44511 22.6607 6.55277 22.7683 6.6829C24.1911 8.40233 24.7826 10.4663 24.7826 12.6606C24.7826 14.8549 24.1894 16.9189 22.7683 18.6383C22.551 18.9011 22.2381 19.0668 21.8986 19.099C21.5591 19.1311 21.2208 19.0271 20.958 18.8098C20.6952 18.5924 20.5295 18.2796 20.4974 17.9401C20.4652 17.6006 20.5692 17.2623 20.7866 16.9995C21.7569 15.8269 22.2111 14.3766 22.2111 12.6606C22.2111 10.9446 21.7569 9.49433 20.7883 8.32347C20.6804 8.19331 20.5992 8.04315 20.5495 7.88159C20.4997 7.72002 20.4823 7.55023 20.4982 7.38192C20.5141 7.21361 20.5631 7.0501 20.6423 6.90074C20.7215 6.75137 20.8293 6.6191 20.9597 6.51147H20.958ZM18.318 9.72576C18.6267 9.58194 18.98 9.56651 19.3001 9.68286C19.6202 9.79921 19.8811 10.0378 20.0254 10.3463C20.3631 11.0646 20.526 11.8566 20.4986 12.6606C20.5264 13.4586 20.3642 14.2518 20.0254 14.9749C19.874 15.2719 19.6131 15.4985 19.2978 15.6069C18.9825 15.7152 18.6374 15.6968 18.3354 15.5556C18.0334 15.4144 17.798 15.1614 17.679 14.8499C17.56 14.5385 17.5666 14.193 17.6974 13.8863C17.8678 13.5223 17.9466 13.1221 17.9271 12.7206C17.9253 12.6806 17.9253 12.6406 17.9271 12.6006C17.9466 12.1991 17.8678 11.799 17.6974 11.4349C17.5529 11.1262 17.537 10.7727 17.653 10.4522C17.7691 10.1317 18.0076 9.87042 18.3163 9.72576H18.318Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_28_17">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.830566 0.660156)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Speaker;