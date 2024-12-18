export default function SpiralImage() {
  return (
    <svg className="w-48 h-48" viewBox="0 0 100 100" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 3H3V23H23V3ZM23 25H3V48H23V25ZM1 25V23V3V1H3H23H25H48H50H73H75H97H99V3V23V25V48V50V73V75V97V99H97H75H73H50H48H25H23H3H1V97V75V73V50V48V25ZM97 23V3H75V23H97ZM75 25H97V48H75V25ZM73 23V3H50V23H73ZM50 25H73V48H50V25ZM48 25V48H25V25H48ZM48 23H25V3H48V23ZM97 50V73H75V50H97ZM73 50V73H50V50H73ZM73 75H50V97H73V75ZM48 50V73H25V50H48ZM48 75H25V97H48V75ZM23 50V73H3V50H23ZM23 75H3V97H23V75ZM97 75H75V97H97V75Z"
        className="fill-foreground"
      />
      <path
        d="M87.5 13H89V11.5H87.5V13ZM87.5 88V89.5H89V88H87.5ZM11 88H9.5V89.5H11V88ZM11 35V33.5H9.5V35H11ZM62 35H63.5V33.5H62V35ZM62 63V64.5H63.5V63H62ZM31 63L46 71.6603V54.3397L31 63ZM11 14.5H87.5V11.5H11V14.5ZM86 13V88H89V13H86ZM87.5 86.5H11V89.5H87.5V86.5ZM12.5 88V35H9.5V88H12.5ZM11 36.5H62V33.5H11V36.5ZM60.5 35V63H63.5V35H60.5ZM62 61.5H44.5V64.5H62V61.5Z"
        className="fill-primary"
      />
    </svg>
  );
}
