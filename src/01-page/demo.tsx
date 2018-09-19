import * as React from 'react';
import Section from '../section';
import Headline, { HeadlineLevel } from '../headline';
import Copy, { Size as CopySize } from '../copy';
import Space, { SpaceSize } from '../space';
import { Color } from '../colors';
import Button, { ButtonOrder } from '../button';
import Footer from '../footer';
import Layout from '../layout';
import Menu from '../menu';
import MenuItem from '../menu-item';
import Feature, { FeatureLevel, Layout as FeatureLayout } from '../feature';
import Teaser from '../teaser';
import * as Types from '../types';
import { injectGlobal } from 'styled-components';

injectGlobal`
	body {
		margin: 0;
		padding: 0;
	}
`;

const Page: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div style={{overflow: "hidden"}}>
			<Menu logo="https://media.meetalva.io/alva.svg">
				<MenuItem linkName="Get Started" onClick={() => window.open("./doc/docs/start?guides-enabled=true","_blank")} />
			</Menu>
			<Section backgroundColor={Color.Black} textColor={Color.White}>
				<Headline level={HeadlineLevel.H1}>
					Create <u>living prototypes</u> with code components.
				</Headline>
				<Space size={SpaceSize.M} />
				<Layout maxWidth="640px">
					<Copy size={CopySize.Large}>
						Alva lets you to design interactive products based on the same components your developers are using for production websites. And guess what – we are entirely open source.
					</Copy>
				</Layout>
				<Space size={SpaceSize.L} />
				<Button order={ButtonOrder.Primary} onClick={() => window.open("https://github.com/meetalva/alva/releases/latest","_blank")}>
					Download Beta for macOS
				</Button>
				<Space size={SpaceSize.S} />
				<Copy color={Color.Grey70} size={CopySize.Small}>Also available for <u>Windows</u> and <u>Linux</u></Copy>
				<Space size={SpaceSize.XL} />
			</Section>

			<Feature
                featureLevel={FeatureLevel.Large}
                headline="Start your prototype with code components"
                copy="Connect to your compatible React library and start using the components of your developers for your prototype. Without writing a single line of code."
                layout={FeatureLayout.Center}
				frame={ <img src="https://raw.githubusercontent.com/meetalva/media/master/application.png" style={{display: "block"}} /> }
				negativeTop
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Large}
                headline="Integrate your visual design drafts"
				copy="Add your latest design drafts to your prototype and show your team how the next component should look like."
                layout={FeatureLayout.Left}
                frame={ <img src="https://raw.githubusercontent.com/meetalva/media/master/application.png" style={{display: "block"}} /> }
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Large}
                headline="Connect everything with interactions"
                copy="The web is interactive – so let’s design interactively, too. Go beyond static screens and design with interaction, data and logic in mind."
                layout={FeatureLayout.Right}
                frame={ <img src="https://raw.githubusercontent.com/meetalva/media/master/application.png" style={{display: "block"}} /> }
            />
			<Space size={SpaceSize.XL} />
			<Space size={SpaceSize.XL} />

			<Teaser
				image="https://images.unsplash.com/photo-1430572786910-927890ae3088?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b07d84a891c5c71dbecb5f981161e043&auto=format&fit=crop&w=2250&q=80"
				headline="Our mission is to enable designers and engineers to build better products together. Without friction."
			>
				<div style={{padding: "56.25% 0 0 0", position: "relative"}}>
					<iframe src="https://player.vimeo.com/video/253654655?byline=0&portrait=0&title=0" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderWidth: 0}} allowFullScreen></iframe>
				</div>
				<script src="https://player.vimeo.com/api/player.js"></script>
			</Teaser>

			<Section>
				<Layout maxWidth="480px">
					<Headline level={HeadlineLevel.H3} color={Color.Violet} fontWeight={Types.FontWeight.Light}>
						Stay tuned!
					</Headline>
					<Space size={SpaceSize.S} />
					<Copy>
						Alva is constantly evolving. Sign up with your email to be the first in line when we announce new features.
					</Copy>
					<Space size={SpaceSize.M} />
					<div id="mc_embed_signup">
						<form action="https://alva.us17.list-manage.com/subscribe/post?u=8f07560758ff52583a4f34f45&amp;id=d598cf405b" method="post"
						id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
							<div id="mc_embed_signup_scroll" style={{
								display: "flex"
							}}>
								<input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Email address" required style={{
									fontFamily: "Graphik, Arial",
									fontSize: "16px",
									padding: "10px 15px",
									border: `1px solid ${Color.Grey50}`,
									borderRightWidth: 0,
									borderRadius: '3px 0 0 3px'
								}}/>
								<div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
									<input type="text" name="b_8f07560758ff52583a4f34f45_d598cf405b" tabIndex={-1} value="" />
								</div>
								<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" style={{
									fontFamily: "Graphik, Arial",
									fontSize: "16px",
									border: "none",
									padding: "0 15px",
									background: Color.Violet,
									color: Color.White,
									borderRadius: '0 3px 3px 0'
								}} />
							</div>
						</form>
					</div>
				</Layout>

			</Section>

			<Section backgroundColor={Color.Grey95}>
				<Headline level={HeadlineLevel.H1} color={Color.Violet} fontWeight={Types.FontWeight.Light}>
					<b>And wait for it</b> – we are entirely open source.
				</Headline>
				<Space size={SpaceSize.M} />
				<Layout maxWidth="640px">
					<Copy size={CopySize.Large} color={Color.Grey50}>
						For the last years most of the design tools have been expensive and proprietary software. We want to give something back to the community and start the next generation of design tools. Open-minded and open-source.
					</Copy>
				</Layout>
				<Space size={SpaceSize.L} />
				<Button order={ButtonOrder.Secondary} color={Color.Violet} onClick={() => window.open("https://github.com/meetalva/alva/","_blank")}>
					Contribute to Alva on Github
				</Button>
			</Section>

			<Footer copyright="&copy; 2018 Alva">
				<MenuItem linkName="Legal notice" onClick={() => window.open("./doc/docs/legalnotice?guides-enabled=true","_blank")} />
				<MenuItem linkName="Privacy Policy" onClick={() => window.open("./doc/docs/privacypolicy?guides-enabled=true","_blank")} />
			</Footer>
		</div>
	);
};

export default Page;
