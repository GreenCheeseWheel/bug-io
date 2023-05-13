import CreateModal from "@/components/CreateModal";

export default function Home()
{

    return (
        <main className="min-h-[100vh]">
            <svg className="absolute top-0 object-fill" viewBox="0 0 400 675" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect fill="#001829"></rect><g><g transform="translate(89 594)"><path d="M0 -18.4L15.9 -9.2L15.9 9.2L0 18.4L-15.9 9.2L-15.9 -9.2Z" fill="#297EA6"></path></g><g transform="translate(17 10)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(502 536)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(193 398)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(356 648)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(741 229)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(442 246)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(655 501)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(802 48)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(831 487)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(689 423)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(578 334)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(536 467)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(778 556)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(210 518)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(437 117)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(793 259)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(686 88)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(518 294)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(501 114)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(594 161)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(396 481)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(655 649)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(408 343)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(32 433)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(857 621)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(118 392)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(143 12)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(704 177)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(547 592)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(853 285)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(775 599)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(724 634)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(351 164)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(90 100)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(598 211)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(742 373)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(664 178)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(142 222)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(311 461)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(49 150)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(23 559)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(747 80)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(100 649)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(334 216)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(468 49)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(882 433)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(3 269)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(398 216)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(641 104)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(157 599)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(863 532)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(626 424)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(459 491)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(458 398)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(148 635)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(695 327)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(225 36)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(748 293)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(458 597)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(472 182)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(370 111)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(793 671)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(502 620)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(86 181)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(216 589)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(48 303)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(170 353)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(654 345)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(796 166)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(246 332)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(100 45)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(851 659)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(113 463)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(430 47)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(895 227)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(792 409)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(683 226)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(301 331)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(867 58)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(179 22)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(635 275)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(895 374)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(151 460)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(9 94)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(599 504)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(366 326)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(141 57)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(157 153)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(678 385)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(658 578)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(443 12)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(577 642)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(257 633)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(247 525)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(711 264)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(635 236)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(500 425)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(246 155)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(151 313)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(738 467)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(395 413)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(353 600)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(722 524)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(852 132)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(273 128)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(281 238)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(689 25)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(26 661)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(86 335)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(498 326)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(37 361)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(561 74)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(7 610)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(115 535)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(267 558)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(864 181)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(617 541)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(193 183)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(353 440)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(696 141)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(305 172)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(601 297)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(425 443)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(315 547)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(202 649)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(40 50)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(285 68)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(108 136)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(210 122)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(64 498)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(323 52)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(119 254)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(200 298)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(578 571)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(315 645)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(890 295)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(37 197)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(291 404)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(400 537)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(833 84)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(253 275)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(545 545)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(421 157)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(420 616)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(651 24)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(530 41)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(566 372)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(477 222)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(386 63)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(529 183)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(459 334)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(486 366)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(898 166)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(354 545)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(834 376)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(864 569)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(253 95)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(534 144)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(822 536)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(786 473)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(174 91)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(439 561)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(537 655)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(731 415)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(325 367)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(803 220)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(828 598)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(581 36)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(65 251)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(29 485)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(400 255)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(266 491)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(735 5)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(223 239)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(249 412)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(819 9)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(616 668)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(63 461)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(304 12)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(705 586)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(208 343)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(230 465)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(53 395)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(262 20)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(564 246)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(811 326)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(551 2)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(741 150)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(347 263)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(663 304)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(457 296)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(787 104)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(693 485)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(428 654)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(512 580)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(754 504)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(295 594)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(511 255)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(477 672)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(778 367)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(395 574)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(830 425)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(865 332)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(537 329)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(180 561)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(294 279)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(175 266)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(437 523)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(622 64)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(529 401)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(90 297)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(621 612)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(302 503)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(756 656)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(742 576)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(328 100)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(177 494)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(649 456)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(897 599)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(581 410)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(126 574)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(19 235)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(420 293)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(779 3)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(151 420)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(571 117)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(140 109)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(529 512)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(91 221)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(850 235)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(486 459)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(891 476)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(353 17)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(383 289)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(694 662)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(886 12)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(559 297)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(89 5)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(162 669)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(54 84)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(57 628)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(262 199)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(59 547)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(194 440)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(626 370)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(339 498)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(365 375)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(216 79)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(691 551)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(604 4)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(881 107)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(7 172)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(630 193)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(432 201)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(272 445)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(600 464)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(260 376)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(388 671)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(423 389)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(14 520)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(505 6)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(762 187)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(767 324)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(510 75)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(387 2)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(894 666)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(267 670)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(387 175)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(333 301)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(139 505)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(181 225)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(445 81)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(718 53)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(6 336)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(336 404)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(11 135)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(79 424)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(64 672)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(43 591)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(670 615)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(474 144)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(128 353)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(800 630)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(625 139)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(132 181)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(816 289)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(731 336)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(728 114)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(4 408)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(383 622)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(552 433)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(762 42)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(256 596)"><path d="M0 -15L13 -7.5L13 7.5L0 15L-13 7.5L-13 -7.5Z" fill="#297EA6"></path></g><g transform="translate(465 634)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(673 265)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(559 207)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(85 373)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(898 520)"><path d="M0 -13L11.3 -6.5L11.3 6.5L0 13L-11.3 6.5L-11.3 -6.5Z" fill="#297EA6"></path></g><g transform="translate(865 400)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(210 2)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(791 513)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(3 48)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(102 500)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(317 135)"><path d="M0 -17L14.7 -8.5L14.7 8.5L0 17L-14.7 8.5L-14.7 -8.5Z" fill="#297EA6"></path></g><g transform="translate(816 127)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g><g transform="translate(405 95)"><path d="M0 -14L12.1 -7L12.1 7L0 14L-12.1 7L-12.1 -7Z" fill="#297EA6"></path></g><g transform="translate(2 454)"><path d="M0 -16L13.9 -8L13.9 8L0 16L-13.9 8L-13.9 -8Z" fill="#297EA6"></path></g></g></svg>
            
            <CreateModal />
        </main>
    )

}