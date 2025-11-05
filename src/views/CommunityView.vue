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
                    <li><a href="/adoption">Adoption</a></li>
                    <li><a href="/community" class="active">Community</a></li>
                    <li><a href="/donation">Donate</a></li>
                    <li><a href="/signup" class="btn-nav">Login</a></li>
                </ul>
            </nav>
        </div>
    </header> -->

    <main>
        <section class="page-header">
            <div class="container">
                <h1>Community Forum</h1>
                <p>Connect with fellow pet lovers, share stories, and get advice</p>
            </div>
        </section>

        <section class="community-section">
            <div class="container">
                <div class="community-layout">
                    <div class="posts-container">
                        <div class="post-card">
                            <div class="post-header">
                                <div class="post-user">
                                    <div class="user-avatar">S</div>
                                    <div class="user-info">
                                        <h4>Sarah Johnson</h4>
                                        <p class="post-time">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="post-content">
                                <h3>Just adopted my first rescue dog!</h3>
                                <p>I'm so excited to share that I just brought home Max, a 3-year-old golden retriever mix. He's been through so much but is already showing so much love. Any tips for helping him adjust to his new home?</p>
                            </div>
                            <div class="post-footer">
                                <span class="post-stat">💬 12 comments</span>
                                <span class="post-stat">💚 45 likes</span>
                            </div>
                        </div>

                        <div class="post-card">
                            <div class="post-header">
                                <div class="post-user">
                                    <div class="user-avatar">M</div>
                                    <div class="user-info">
                                        <h4>Michael Chen</h4>
                                        <p class="post-time">5 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="post-content">
                                <h3>Foster care success story</h3>
                                <p>After fostering Luna for 6 months, I officially adopted her today! She came to us scared and withdrawn, but now she's the most affectionate cat. Foster-to-adopt is such a wonderful program.</p>
                            </div>
                            <div class="post-footer">
                                <span class="post-stat">💬 8 comments</span>
                                <span class="post-stat">💚 67 likes</span>
                            </div>
                        </div>

                        <div class="post-card">
                            <div class="post-header">
                                <div class="post-user">
                                    <div class="user-avatar">E</div>
                                    <div class="user-info">
                                        <h4>Emily Rodriguez</h4>
                                        <p class="post-time">1 day ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="post-content">
                                <h3>Question about senior dog care</h3>
                                <p>I'm considering adopting a 10-year-old beagle. What should I know about caring for senior dogs? Are there specific health concerns I should be aware of? Would love to hear from experienced senior dog owners!</p>
                            </div>
                            <div class="post-footer">
                                <span class="post-stat">💬 24 comments</span>
                                <span class="post-stat">💚 31 likes</span>
                            </div>
                        </div>

                        <div class="post-card">
                            <div class="post-header">
                                <div class="post-user">
                                    <div class="user-avatar">D</div>
                                    <div class="user-info">
                                        <h4>David Thompson</h4>
                                        <p class="post-time">2 days ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="post-content">
                                <h3>Volunteer experience at the shelter</h3>
                                <p>Spent my Saturday volunteering at the local shelter. Walking dogs, cleaning kennels, and socializing with cats. It's hard work but so rewarding. If you're thinking about volunteering, I highly recommend it!</p>
                            </div>
                            <div class="post-footer">
                                <span class="post-stat">💬 15 comments</span>
                                <span class="post-stat">💚 89 likes</span>
                            </div>
                        </div>

                        <div class="post-card">
                            <div class="post-header">
                                <div class="post-user">
                                    <div class="user-avatar">L</div>
                                    <div class="user-info">
                                        <h4>Lisa Anderson</h4>
                                        <p class="post-time">3 days ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="post-content">
                                <h3>Training tips that actually worked</h3>
                                <p>After months of patience, my rescue dog finally mastered basic commands! Here's what worked for us: consistency, positive reinforcement, and lots of treats. Remember, every dog learns at their own pace.</p>
                            </div>
                            <div class="post-footer">
                                <span class="post-stat">💬 19 comments</span>
                                <span class="post-stat">💚 52 likes</span>
                            </div>
                        </div>
                    </div>

                    <aside class="community-sidebar">
                        <div class="sidebar-card">
                            <h3>Create New Post</h3>
                            <form class="new-post-form">
                                <div class="form-group">
                                    <input type="text" placeholder="Post title..." required>
                                </div>
                                <div class="form-group">
                                    <textarea rows="4" placeholder="Share your thoughts..." required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary btn-full">Post</button>
                            </form>
                        </div>

                        <div class="sidebar-card">
                            <h3>Popular Topics</h3>
                            <ul class="topic-list">
                                <li><a href="#">Adoption Stories</a></li>
                                <li><a href="#">Training Tips</a></li>
                                <li><a href="#">Health & Wellness</a></li>
                                <li><a href="#">Foster Care</a></li>
                                <li><a href="#">Volunteer Work</a></li>
                            </ul>
                        </div>

                        <div class="sidebar-card">
                            <h3>Community Stats</h3>
                            <div class="stats-list">
                                <div class="stat-item">
                                    <span class="stat-number">2,547</span>
                                    <span class="stat-label">Members</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-number">1,239</span>
                                    <span class="stat-label">Discussions</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-number">8,642</span>
                                    <span class="stat-label">Comments</span>
                                </div>
                            </div>
                        </div>
                    </aside>
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
export default { name: 'CommunityView' }
</script>

<style scoped>
</style>
