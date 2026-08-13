import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Share2,
  Bookmark,
  Award,
  Shirt,
  Tag,
  Smile,
  Clock3,
  ChevronRight,
  Download,
  Instagram,
  Facebook,
  Navigation,
  X,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";

import logo from "../../assets/visiting-card/sri-sai-krishna/logo.png";
import heroImage from "../../assets/visiting-card/sri-sai-krishna/hero.png";
import shop1 from "../../assets/visiting-card/sri-sai-krishna/shop-4.png";
import shop2 from "../../assets/visiting-card/sri-sai-krishna/shop-1.png";
import shop3 from "../../assets/visiting-card/sri-sai-krishna/shop-3.png";
import shop4 from "../../assets/visiting-card/sri-sai-krishna/shop-2.png";
import mens from "../../assets/visiting-card/sri-sai-krishna/men.png";
import kids from "../../assets/visiting-card/sri-sai-krishna/kid.png";


/* =========================================================
   STORE DATA
   ========================================================= */

const STORE = {
  name: "Sri Sai Krishna",
  category: "MEN'S & KID'S WEAR",
  phone: "09786028894",
  whatsapp: "919786028894",
  address: "10, Vellalar St, MG Road Area, Puducherry, 605001",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=10%20Vellalar%20Street%20Puducherry",
  website: window.location.origin,
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

/* =========================================================
   COMMON
   ========================================================= */

const navy = "#061F3C";
const gold = "#C98A28";
const cream = "#FBF7F0";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.45 },
};

function downloadContact() {
  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${STORE.name}
ORG:${STORE.name}
TEL;TYPE=CELL:${STORE.phone}
URL:${STORE.website}
ADR;TYPE=WORK:;;10, Vellalar St, MG Road Area;Puducherry;;605001;India
NOTE:${STORE.category}
END:VCARD
  `.trim();

  const blob = new Blob([vcard], {
    type: "text/vcard;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "Sri-Sai-Krishna.vcf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/* =========================================================
   QUICK ACTIONS
   ========================================================= */

const actions = [
  {
    title: "Call",
    icon: Phone,
    action: () => {
      window.location.href = `tel:${STORE.phone}`;
    },
  },
  {
    title: "WhatsApp",
    icon: MessageCircle,
    action: () => {
      window.open(`https://wa.me/${STORE.whatsapp}`, "_blank");
    },
  },
  {
    title: "Directions",
    icon: MapPin,
    action: () => {
      window.open(STORE.mapUrl, "_blank");
    },
  },
  {
    title: "Share",
    icon: Share2,
    action: async () => {
      if (navigator.share) {
        await navigator.share({
          title: STORE.name,
          text: `${STORE.name} - ${STORE.category}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied successfully!");
      }
    },
  },
  {
    title: "Save Contact",
    icon: Bookmark,
    action: downloadContact,
  },
];

function QuickActions() {
  return (
    <section className="relative z-20 px-5 sm:px-8">
      <div
        className="
          mx-auto
          -mt-8
          overflow-hidden
          rounded-[20px]
          bg-[#061F3C]
          p-2
          shadow-[0_12px_28px_rgba(6,31,60,0.28)]
          sm:-mt-8
          sm:p-2.5
        "
      >
        <div className="grid grid-cols-5 divide-x divide-white/20">
          {actions.map(({ title, icon: Icon, action }) => (
            <button
              key={title}
              onClick={action}
              className="
                group
                flex
                min-w-0
                flex-col
                items-center
                justify-center
                gap-1.5
                py-2
                text-white
                transition
                active:scale-[0.97]
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#E2A52C]
                  text-[#E2A52C]
                  transition
                  group-hover:bg-[#E2A52C]
                  group-hover:text-white
                  sm:h-12
                  sm:w-12
                "
              >
                <Icon size={21} strokeWidth={2} />
              </span>

              <span className="truncate text-[9px] font-medium sm:text-xs">
                {title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-t-[20px] bg-[#FBF7F0]">
      <div className="relative min-h-[455px] sm:min-h-[520px] lg:min-h-[560px]">
        <img
          src={heroImage}
          alt="Sri Sai Krishna men's and kids wear"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Exact visual treatment: light left side, clean model area on right */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#FBF7F0]
            from-[0%]
            via-[#FBF7F0]/95
            via-[45%]
            to-transparent
            to-[72%]
          "
        />

        <div className="relative z-10 flex min-h-[455px] items-center sm:min-h-[520px] lg:min-h-[560px]">
          <div className="w-[58%] px-7 py-10 sm:w-[57%] sm:px-12 lg:px-14">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex justify-center"
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  p-1
                  shadow-md
                  ring-1
                  ring-black/5
                  sm:h-20
                  sm:w-20
                "
              >
                <img
                  src={logo}
                  alt="Sri Sai Krishna logo"
                  className="h-full w-full rounded-full object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-center"
            >
              <p
                className="
                  mb-0
                  font-serif
                  text-2xl
                  italic
                  text-[#C98A28]
                  sm:text-3xl
                "
              >
                Sri
              </p>

              <h1
                className="
                  font-serif
                  text-[39px]
                  font-bold
                  leading-[0.9]
                  tracking-[-0.025em]
                  text-[#061F3C]
                  sm:text-6xl
                  lg:text-[66px]
                "
              >
                Sai Krishna
              </h1>

              <p
                className="
                  mt-4
                  text-[10px]
                  font-bold
                  tracking-[0.2em]
                  text-[#A96F20]
                  sm:text-sm
                "
              >
                MEN'S & KID'S WEAR
              </p>

              <div className="my-5 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-[#C98A28]" />
                <span className="text-sm text-[#C98A28]">❧</span>
                <span className="h-px w-12 bg-[#C98A28]" />
              </div>

              <p className="text-sm leading-6 text-gray-800 sm:text-lg sm:leading-7">
                Trendy Looks. Trusted Quality.
                <br />
                For Men & Kids.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COLLECTION
   ========================================================= */

function CollectionCard({ title, image, description, variant }) {
  return (
    <motion.div
      {...fadeUp}
      className={`
        relative
        min-h-[240px]
        overflow-hidden
        rounded-[16px]
        ${
          variant === "men"
            ? "bg-[#E9F0F8]"
            : "bg-[#F5EBDD]"
        }
      `}
    >
      <div className="relative z-10 flex min-h-[240px] items-center">
        <div className="w-[55%] px-5 py-6 sm:px-7">
          <h3 className="text-xl font-bold text-[#061F3C] sm:text-2xl">
            {title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-900 sm:text-base">
            {description}
          </p>

          <button
            className={`
              mt-4
              rounded-xl
              px-5
              py-2
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:-translate-y-0.5
              ${
                variant === "men"
                  ? "bg-[#061F3C]"
                  : "bg-[#B57922]"
              }
            `}
          >
            Explore
          </button>
        </div>

        <div className="absolute bottom-0 right-0 h-full w-[48%]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top mix-blend-multiply"
          />
        </div>
      </div>
    </motion.div>
  );
}

function Collection() {
  return (
    <section className="px-5 pb-7 pt-8 sm:px-8">
      <SectionTitle>OUR COLLECTION</SectionTitle>

      <div className="relative grid gap-5 md:grid-cols-2">
        <CollectionCard
          title="MEN’S WEAR"
          variant="men"
          image={mens}
          description={
            <>
              Shirts, T-Shirts,
              <br />
              Jeans, Trousers,
              <br />
              Ethnic Wear & More
            </>
          }
        />

        <CollectionCard
          title="KIDS WEAR"
          variant="kids"
          image={kids}
          description={
            <>
              T-Shirts, Shirts,
              <br />
              Jeans, Ethnic,
              <br />
              Party Wear & More
            </>
          }
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            hidden
            h-16
            w-16
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#C98A28]
            bg-white
            text-[#C98A28]
            shadow-md
            md:flex
          "
        >
          <Shirt size={29} strokeWidth={1.6} />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      <span className="h-px w-14 bg-[#C98A28]" />
      <h2 className="text-lg font-bold tracking-wide text-[#A96F20] sm:text-xl">
        {children}
      </h2>
      <span className="h-px w-14 bg-[#C98A28]" />
    </div>
  );
}

/* =========================================================
   FEATURES
   ========================================================= */

const features = [
  { icon: Award, title: "Premium Quality", subtitle: "Fabrics" },
  { icon: Shirt, title: "Latest Trends", subtitle: "Always" },
  { icon: Tag, title: "Affordable", subtitle: "Prices" },
  { icon: Smile, title: "Happy", subtitle: "Customers" },
];

function Features() {
  return (
    <motion.section
      {...fadeUp}
      className="mx-5 rounded-[17px] bg-[#FBF7F0] px-3 py-6 sm:mx-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {features.map(({ icon: Icon, title, subtitle }, index) => (
          <div
            key={title}
            className={`
              flex
              flex-col
              items-center
              justify-center
              px-2
              py-3
              text-center
              ${
                index > 0
                  ? "border-l border-dashed border-[#DCC49B]"
                  : ""
              }
              ${
                index > 1
                  ? "border-t border-dashed border-[#DCC49B] md:border-t-0"
                  : ""
              }
              ${
                index === 1
                  ? "border-t-0"
                  : ""
              }
            `}
          >
            <Icon
              size={39}
              strokeWidth={1.6}
              className="text-[#061F3C]"
            />

            <p className="mt-3 text-sm font-semibold text-gray-900">
              {title}
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */

function ContactInfo() {
  return (
    <motion.section
      {...fadeUp}
      className="
        mx-5
        mt-7
        overflow-hidden
        rounded-[17px]
        border
        border-gray-200
        bg-white
        sm:mx-8
      "
    >
      <div className="flex items-center gap-4 border-b border-gray-100 p-5">
        <ContactIcon>
          <MapPin size={26} />
        </ContactIcon>

        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold leading-6 text-gray-900 sm:text-lg">
            10, Vellalar St, MG Road Area,
            <br />
            Puducherry, 605001
          </p>
        </div>

        <a
          href={STORE.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="
            hidden
            h-20
            w-56
            shrink-0
            overflow-hidden
            rounded-xl
            bg-[#E8F0F7]
            sm:flex
            sm:items-center
            sm:justify-center
          "
        >
          <Navigation size={38} className="text-red-500" />
          <span className="ml-2 text-xs font-semibold text-gray-700">
            HERITAGE TOWN
          </span>
        </a>
      </div>

      <a
        href={`https://wa.me/${STORE.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 border-b border-gray-100 p-5 transition hover:bg-gray-50"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#27AE43] text-white">
          <MessageCircle size={27} />
        </div>

        <span className="flex-1 text-base font-semibold sm:text-lg">
          WhatsApp
        </span>

        <ChevronRight className="text-gray-500" />
      </a>

      <div className="flex items-center gap-4 border-b border-gray-100 p-5">
        <ContactIcon>
          <Clock3 size={26} />
        </ContactIcon>

        <div className="flex-1 text-base sm:text-lg">
          <span className="font-semibold text-green-600">Open</span>
          <span className="mx-2 text-gray-400">•</span>
          <span>Closes 10:30 PM</span>
        </div>

        <ChevronRight className="text-gray-500" />
      </div>

      <a
        href={`tel:${STORE.phone}`}
        className="flex items-center gap-4 p-5 transition hover:bg-gray-50"
      >
        <ContactIcon>
          <Phone size={26} />
        </ContactIcon>

        <span className="flex-1 text-base font-semibold sm:text-lg">
          097860 28894
        </span>

        <ChevronRight className="text-gray-500" />
      </a>
    </motion.section>
  );
}

function ContactIcon({ children }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#061F3C] text-white">
      {children}
    </div>
  );
}

/* =========================================================
   GALLERY
   ========================================================= */

const gallery = [shop1, shop2, shop3, shop4, heroImage];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <motion.section
        {...fadeUp}
        className="px-5 pb-2 pt-8 sm:px-8"
      >
        <SectionTitle>STORE GALLERY</SectionTitle>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              onClick={() => setSelected(image)}
              className="
                group
                relative
                aspect-[1.35]
                overflow-hidden
                rounded-xl
              "
            >
              <img
                src={image}
                alt={`Sri Sai Krishna store ${index + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </button>
          ))}
        </div>
      </motion.section>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 rounded-full bg-white p-2 text-black"
          >
            <X size={25} />
          </button>

          <img
            src={selected}
            alt="Store preview"
            className="max-h-[90vh] max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </>
  );
}

/* =========================================================
   BOTTOM ACTIONS
   ========================================================= */

function BottomActions() {
  return (
    <motion.section
      {...fadeUp}
      className="grid gap-4 px-5 py-7 sm:px-8 md:grid-cols-3"
    >
      <div className="flex min-h-[190px] flex-col justify-center rounded-[17px] bg-[#061F3C] p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="rounded-xl border border-[#E2A52C] p-3 text-[#E2A52C]">
            <Bookmark size={28} />
          </div>

          <div>
            <h3 className="font-semibold tracking-wide">SAVE OUR CONTACT</h3>
            <p className="mt-1 text-sm leading-5 text-white/85">
              Save our contact details
              <br />
              to your phone for quick
              <br />
              access anytime.
            </p>
          </div>
        </div>

        <button
          onClick={downloadContact}
          className="
            mt-5
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-xl
            bg-[#D99125]
            px-5
            py-2.5
            font-semibold
            text-white
            transition
            hover:bg-[#E5A53B]
          "
        >
          <Download size={18} />
          Save Contact
        </button>
      </div>

      <div className="flex min-h-[190px] flex-col items-center justify-center rounded-[17px] border border-gray-200 bg-white p-5">
        <QRCodeCanvas
          value={STORE.website}
          size={125}
          level="H"
          includeMargin
        />

        <p className="mt-3 font-semibold text-gray-900">Scan to Visit</p>
      </div>

      <div className="flex min-h-[190px] flex-col items-center justify-center rounded-[17px] bg-[#FBF7F0] p-5">
        <h3 className="text-lg font-semibold text-[#A96F20]">FOLLOW US</h3>

        <div className="mt-6 flex items-center gap-7">
          <a
            href={STORE.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-110"
          >
            <Facebook size={27} />
          </a>

          <a
            href={STORE.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition hover:scale-110"
          >
            <Instagram size={27} />
          </a>

          <a
            href={`https://wa.me/${STORE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-110"
          >
            <MessageCircle size={27} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 bg-[#061F3C] px-6 py-5 text-white sm:flex-row sm:px-10">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1">
          <img
            src={logo}
            alt="Sri Sai Krishna"
            className="h-full w-full rounded-full object-contain"
          />
        </div>

        <div>
          <h3 className="font-serif text-xl">Sai Krishna</h3>
          <p className="text-[10px] tracking-widest text-white/80">
            MEN'S & KID'S WEAR
          </p>
        </div>
      </div>

      <div className="hidden h-10 w-px bg-white/30 sm:block" />

      <p className="font-serif text-lg italic text-[#E2A52C] sm:text-xl">
        Style for Every Moment ♡
      </p>
    </footer>
  );
}

/* =========================================================
   APP
   ========================================================= */

export default function SriSaiKrishnaCard() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="mx-auto w-full overflow-hidden bg-white">
        <Hero />
        <QuickActions />
        <Collection />
        <Features />
        <ContactInfo />
        <Gallery />
        <BottomActions />
        <Footer />
      </div>
    </main>
  );
}
