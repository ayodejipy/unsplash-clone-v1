<template>
    <div class="card">
        <img
            src="https://images.unsplash.com/photo-1715110313734-d38c669cd55a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Description"
        />
        <div class="card__description">
            <h3>Jordan Okeke</h3>
            <p>Pretoria, South Africa</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    width: 100%;
    height: auto;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: clip;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

	.card__description {
		padding: 16px;
		position: absolute;
		bottom: 0;
		left: 0;
	}
}

</style>
