
<template>
<!-- <header class="header">
        <div class="container">
            <nav class="nav">
                <div class="logo">
                    <a href="/">
                        <span class="logo-icon">🐾</span>
                        <span class="logo-text">Pet Rescue</span>
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/articles">Articles</a></li>
                    <li><a href="/adoption" class="active">Adoption</a></li>
                    <li><a href="/community">Community</a></li>
                    <li><a href="/donation">Donate</a></li>
                    <li><a href="/signup" class="btn-nav">Login</a></li>
                </ul>
            </nav>
        </div>
    </header> -->

    <main>
        <section class="page-header">
            <div class="container">
                <h1>Find Your Perfect Companion</h1>
                <p>Browse our adoptable pets and give them a loving forever home</p>
            </div>
        </section>

        <section class="adoption-section">
            <div class="container">
                <div class="adoption-filters">
                    <select class="filter-select">
                        <option value="all">All Animals</option>
                        <option value="dogs">Dogs</option>
                        <option value="cats">Cats</option>
                        <option value="rabbits">Rabbits</option>
                        <option value="birds">Birds</option>
                    </select>
                    <select class="filter-select">
                        <option value="all">All Ages</option>
                        <option value="puppy">Puppy/Kitten</option>
                        <option value="young">Young</option>
                        <option value="adult">Adult</option>
                        <option value="senior">Senior</option>
                    </select>
                    <select class="filter-select">
                        <option value="all">All Sizes</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                <div class="adoption-grid">
                    <div class="pet-card">
                        <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Max">
                        <div class="pet-info">
                            <h3>Max</h3>
                            <p class="pet-breed">Golden Retriever Mix</p>
                            <div class="pet-details">
                                <span>🎂 3 years</span>
                                <span>⚥ Male</span>
                            </div>
                            <p class="pet-description">Friendly and energetic. Great with kids and other dogs. Loves to play fetch!</p>
                            <a href="#" class="btn btn-primary btn-full">Adopt Now</a>
                        </div>
                    </div>

                    <div class="pet-card">
                        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Luna">
                        <div class="pet-info">
                            <h3>Luna</h3>
                            <p class="pet-breed">Domestic Shorthair</p>
                            <div class="pet-details">
                                <span>🎂 2 years</span>
                                <span>⚥ Female</span>
                            </div>
                            <p class="pet-description">Sweet and gentle. Perfect lap cat who loves to cuddle and purr.</p>
                            <a href="#" class="btn btn-primary btn-full">Adopt Now</a>
                        </div>
                    </div>

                    <div class="pet-card">
                        <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Buddy">
                        <div class="pet-info">
                            <h3>Buddy</h3>
                            <p class="pet-breed">Beagle</p>
                            <div class="pet-details">
                                <span>🎂 5 years</span>
                                <span>⚥ Male</span>
                            </div>
                            <p class="pet-description">Calm and affectionate. Well-trained and great for first-time dog owners.</p>
                            <a href="#" class="btn btn-primary btn-full">Adopt Now</a>
                        </div>
                    </div>

                    <div class="pet-card">
                        <img src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Whiskers">
                        <div class="pet-info">
                            <h3>Whiskers</h3>
                            <p class="pet-breed">Maine Coon</p>
                            <div class="pet-details">
                                <span>🎂 4 years</span>
                                <span>⚥ Male</span>
                            </div>
                            <p class="pet-description">Majestic and playful. Loves attention and interactive toys.</p>
                            <a href="#" class="btn btn-primary btn-full">Adopt Now</a>
                        </div>
                    </div>

                    <div class="pet-card">
                        <img src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bella">
                        <div class="pet-info">
                            <h3>Bella</h3>
                            <p class="pet-breed">Labrador Mix</p>
                            <div class="pet-details">
                                <span>🎂 1 year</span>
                                <span>⚥ Female</span>
                            </div>
                            <p class="pet-description">Young and playful. Full of energy and loves outdoor activities.</p>
                            <a href="#" class="btn btn-primary btn-full">Adopt Now</a>
                        </div>
                    </div>

                    <div class="pet-card">
                        <img src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Oliver">
                        <div class="pet-info">
                            <h3>Oliver</h3>
                            <p class="pet-breed">Tabby Cat</p>
                            <div class="pet-details">
                                <span>🎂 6 years</span>
                                <span>⚥ Male</span>
                            </div>
                            <p class="pet-description">Independent but loving. Perfect for a quiet household.</p>
                            <a href="#" class="btn btn-primary btn-full">Adopt Now</a>
                        </div>
                    </div>

                    <div class="pet-card">
                        <img src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Rocky">
                        <div class="pet-info">
                            <h3>Rocky</h3>
                            <p class="pet-breed">German Shepherd Mix</p>
                            <div class="pet-details">
                                <span>🎂 4 years</span>
                                <span>⚥ Male</span>
                            </div>
                            <p class="pet-description">Loyal and protective. Great family dog with proper training.</p>
                            <a href="#" class="btn btn-primary btn-full">Adopt Now</a>
                        </div>
                    </div>

                    <div class="pet-card">
                        <img src="https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Daisy">
                        <div class="pet-info">
                            <h3>Daisy</h3>
                            <p class="pet-breed">Calico Cat</p>
                            <div class="pet-details">
                                <span>🎂 3 years</span>
                                <span>⚥ Female</span>
                            </div>
                            <p class="pet-description">Sassy and sweet. Loves sunbathing and gentle petting.</p>
                            <a href="#" class="btn btn-primary btn-full">Adopt Now</a>
                        </div>
                    </div>

                    <div class="pet-card">
                        <img src="https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Charlie">
                        <div class="pet-info">
                            <h3>Charlie</h3>
                            <p class="pet-breed">Terrier Mix</p>
                            <div class="pet-details">
                                <span>🎂 7 years</span>
                                <span>⚥ Male</span>
                            </div>
                            <p class="pet-description">Senior dog with lots of love to give. Very well-behaved and house-trained.</p>
                            <a href="#" class="btn btn-primary btn-full">Adopt Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Pet Rescue</h3>
                    <p>We are dedicated to rescuing, rehabilitating, and rehoming animals in need. Every life matters, and together we can make a difference.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="/adoption">Adoption</a></li>
                        <li><a href="/foster">Foster Home</a></li>
                        <li><a href="/report">Report Animal</a></li>
                        <li><a href="/articles">Articles</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <ul class="footer-contact">
                        <li>📧 info@petrescue.org</li>
                        <li>📞 +1 (555) 123-4567</li>
                        <li>📍 123 Rescue Street, City, State</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#" class="social-link">Facebook</a>
                        <a href="#" class="social-link">Instagram</a>
                        <a href="#" class="social-link">Twitter</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Pet Rescue. All rights reserved. Made with 💚 for animals in need.</p>
            </div>
        </div>
    </footer> -->
</template>

<script>
export default { name: 'AdoptionView' }
</script>

<style scoped>
</style>
