import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Carousel } from './components/Carousel';
import { Blogposts } from './components/Blogposts';
import { Button } from './components/Button';
import { Flex } from './components/Flex';
import { Grid } from './components/Grid';
import { HeroBanner } from './components/HeroBanner';
import { ShoppableImage } from './components/ShoppableImage';
import { Stack } from './components/Stack';
import { Text } from './components/Text';

const GlobalStyle = createGlobalStyle`
  :root {
      --primary-black: #141414;
      --primary-white: #FFFFFF;
      --border-radius: 3px;
    }
    
    *,
    :after,
    :before {
        box-sizing: border-box;
    }

    .breadcrumbs {
        display: none;
    }

    @media (min-width: 768px){
        .main-container {
            max-width: none;
            margin-left: auto;
            margin-right: auto;
            padding-left: 0;
            padding-right: 0;
        }
    }

    @media (max-width: 767px) {
        .main-container .main > :not(.toolbar-container) {
            max-width: none;
            margin-left: auto;
            margin-right: auto;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
        }
    }

    html {
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }

    body{
        text-rendering: optimizeSpeed;
    }

    @-moz-document url-prefix() {
        body {
            font-weight: lighter !important;
        }
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
        color: var(--primary-black);
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* the container className is important for the static lazyloading script */}
      <Stack gap={6} className="container">
        <Carousel>
          <HeroBanner
            link="/beauty"
            logo="https://media.missguided.com/i/missguided/missguided_beauty_1"
            src={[
              'https://media.missguided.com/i/missguided/missguided_beauty_hero',
              {
                media: '(max-width: 767px)',
                width: 414,
                height: 600,
                src: 'https://media.missguided.com/i/missguided/missguided_beauty_mobile',
              },
            ]}
            subcopy="Missguided Beauty is now live. Make room in your makeup bag for affordable, vegan and cruelty-free makeup that will leave you with a flawless finish."
            alt="Missguided Beauty Hero"
          />
          <HeroBanner
            link="/beauty/beauty-brands/bondi-sands"
            logo="https://media.missguided.com/i/missguided/bondi_sands_logo"
            src={[
              'https://media.missguided.com/i/missguided/bondi_sands_hero',
              {
                media: '(max-width: 767px)',
                width: 414,
                height: 600,
                src: 'https://media.missguided.com/i/missguided/bondi_sands_mobile',
              },
            ]}
            subcopy="Introducing the latest innovation in self tanning, pure self tanning range by BONDI SANDS. Clean, simple, transparent, the iconic Australian tan."
            noContentBackground
            alt="Bondi Sands Hero"
          />
          <HeroBanner
            link="/beauty/beauty-brands/love-beauty-and-planet"
            logo="https://media.missguided.com/i/missguided/love_beauty_planet_logo"
            src={[
              'https://media.missguided.com/i/missguided/love_beauty_planet_hero',
              {
                media: '(max-width: 767px)',
                width: 414,
                height: 600,
                src: 'https://media.missguided.com/i/missguided/love_beauty_planet_mobile',
              },
            ]}
            subcopy="Introducing the latest innovation in self tanning, pure self tanning range by BONDI SANDS. Clean, simple, transparent, the iconic Australian tan."
            noLogoBackground
            contentBackground="#f4afc2"
            contentColor="var(--primary-black)"
            alt="Love Beauty and Planet Hero"
          />
        </Carousel>
        <Stack
          maxWidth="sm"
          gap={1.5}
          direction="column"
          align="center"
          padding
        >
          <Text element="p" size="base" align="center">
            We don’t just do clothes. Make Missguided your number 1 spot for all
            things beauty. Level up your cosmetics collection with makeup,
            haircare and beauty tools from hundreds of your favourite brands.
            From Simple skincare to Cloud Nine straighteners, we’ve got every
            step of your getting ready routine covered.
          </Text>
          <Button link="/beauty" text="shop all beauty" variant="fill" />
        </Stack>
        <Flex maxWidth="lg" itemFlex={'1 1 180px'} gap={1} padding>
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/new_in_21_04_21"
            height={300}
            link="/new-in"
            text="shop new in"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/nails_inc"
            height={300}
            link="/beauty/beauty-brands/nails-inc"
            text="shop Nails inc"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/cloud_nine"
            height={300}
            link="/beauty/beauty-brands/cloud-nine"
            text="shop cloud nine"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/rimmel_21_04_21"
            height={300}
            link="/beauty/beauty-brands/rimmel"
            text="shop rimmel"
          />
        </Flex>
        <Flex gap={2} itemFlex="1">
          <Blogposts
            postIds={[79905, 78697, 79178, 79335, 80981]}
            isCarousel
            slidesPerView={3.5}
            slidesPerViewMob={1.5}
            spacing={16}
            offsetStart={1}
          />
        </Flex>
        <Stack maxWidth="sm" gap={1.45} align="center" padding>
          <Text element="h3" size="2xl" align="center" heading>
            SHOP BY CATEGORY
          </Text>
          <Text align="center">
            Invest in yourself (and your makeup bag). Shop beauty products from
            Missguided online now. Browse Face products and shop foundations and
            concealers from hundreds of different brands. Create bold statement
            eyes, with Rimmel liquid eyeliner, Iconic cream shadows and
            lengthening mascara. Add the finishing touch to any look, with bold
            lipsticks from Inglot, plumping glosses and matching liners.
          </Text>
        </Stack>
        <Flex maxWidth="lg" itemFlex="1 1 180px" padding>
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/category_face"
            width={298}
            height={298}
            text="shop skincare"
            link="/beauty/skincare"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/category_eye"
            width={298}
            height={298}
            text="shop makeup"
            link="/beauty/make-up"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/category_lips"
            width={298}
            height={298}
            text="shop lips"
            link="/beauty/make-up/lipstick-and-lipgloss"
          />
          <ShoppableImage
            src="https://media.missguided.com/i/missguided/category_fragrance"
            width={298}
            height={298}
            text="shop fragrance"
            link="/beauty/perfume"
          />
        </Flex>
        <Stack maxWidth="md" gap={1.45} padding>
          <Text element="h3" size="2xl" align="center" heading>
            SHOP BY BRAND
          </Text>
          <Grid wrapWidth={200} gap={1}>
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/iconic_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/iconic"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/oh_my_lash_logo_1"
              width={260}
              height={160}
              link="/beauty/beauty-brands/oh-my-lash"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/babyliss_logo_1"
              width={260}
              height={160}
              link="/beauty/beauty-brands/babyliss"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/inglot_logo_1"
              width={260}
              height={160}
              link="/beauty/beauty-brands/inglot"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/simple_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/simple"
              sizes="(max-width: 767px) 207px, 260px"
            />
            <ShoppableImage
              backgroundColor="none"
              src="https://media.missguided.com/i/missguided/rimmel_logo"
              width={260}
              height={160}
              link="/beauty/beauty-brands/rimmel"
              sizes="(max-width: 767px) 207px, 260px"
            />
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}
export default App;
