import "./../styles/components/_post.scss"
import avatar from './../assets/avatar.png'
import ocean from './../assets/ocean.jpg'
import SocialIcons from './SocialIcons'
import PostFeaturedImg from './PostFeaturedImg'

const Post = () => {
    return (
        <article className="content-block">
            <header className="post-header">
                <h1>Purple circles</h1>
                <div className="post-intro">
                    <p>Purple is closely associated with violet. In optics, purple and violet refer to colors that look similar, but purples are mixtures of red  and blue or violet light.</p>
                </div>
                <div className="post-meta inner-block-small">
                    <img src={avatar} className="avatar" alt="Jane Doe"></img>
                    <div className="meta-info">
                        <div className="author">
                            <a href="/">
                                Jane Doe
                            </a>
                        </div>
                        <div className="post-date text-small">
                            Project Manager Dekode – 5 min read – 2 june
                        </div>
                        <SocialIcons/>
                    </div>
                </div>
            </header>
            <div className="post-body">
                <div className="inner-block-small">
                    <p>
                    Purple is closely associated with violet. In common usage, both refer to colors that are between red and blue in hue, with purples closer to red and violets closer to blue. Similarly, in the traditional painters' color wheel, purple and violet are both placed between red and blue, with purple is closer to red.
                    </p>
                </div>
                <PostFeaturedImg 
                    imgSrc={ocean}
                    title="Ocean Image"
                    caption="In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum, between approximately 380 and 450 nanometers."
                    quote="“The process of making the dye was long, difficult and expensive”" 
                />
                <div className="inner-block-small">
                    <p>
                    In humans, the L (red) cone in the eye is primarily sensitive to long wavelength light in the yellow-red region of the spectrum, but is also somewhat sensitive to the shorter wavelength violet light that primarily stimulates the S (blue) cone. 
                    </p>
                    <h2>As a result</h2>
                    <p>
                    As a result, when violet light strikes the eye, the S-cone is stimulated strongly and the L-cone is stimulated weakly. Accordingly, strong blue light mixed with weaker red light can mimic this pattern of stimulation, causing humans to perceive colors that the same hue as violet, but with lower saturation.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Post
